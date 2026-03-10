import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';

const DRAFT_KEY = 'project-details-step-1';
const AUTOSAVE_DELAY_MS = 800;

interface ProjectDetailsFormData {
  projectName: string;
  description?: string;
  startDate?: string | null;
  endDate?: string | null;
}

export default function ProjectDetails() {
  const [formData, setForm] = useState<ProjectDetailsFormData>({
    projectName: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as ProjectDetailsFormData;
      setForm(parsed);
    } catch {
      // ignore invalid draft
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setForm((prev) => {
      const next = { ...prev, [name]: value };

      // Quick local autosave
      localStorage.setItem(DRAFT_KEY, JSON.stringify(next))

      return next;
    });

    setIsSuccess(false);
    setError(null);
  }

  // API autosave after field changes
  useEffect(() => {
    if (saveTimeRef.current) window.clearTimeout(saveTimeRef.current);

    if (!formData.projectName.trim())
      return;

    saveTimeRef.current = window.setTimeout(async () => {
      try {
        const res = await fetch('/api/projects/steps/details', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            step: 1,
            completedSteps: [1],
            stepData: { 1: formData },
            details: formData,
          })
        });

        if (!res.ok) {
          // keeps local draft but user can still continue
        }

      } catch {
        // keep local draft; user can tray again later
      }

    }, AUTOSAVE_DELAY_MS);

    return () => {
      if (saveTimeRef.current) window.clearTimeout(saveTimeRef.current);
    };
  }, [formData]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    if (!formData.projectName.trim()) {
      setError("Please Enter Project Details.");
      setIsLoading(false);
      return;
    }

    const startDate = formData.startDate?.trim() ?? '';
    const endDate = formData.endDate?.trim() ?? '';

    if (startDate && Number.isNaN(Date.parse(startDate))) {
      setError("Start Date is invalid.");
      setIsLoading(false);
      return;
    }

    if (endDate && Number.isNaN(Date.parse(endDate))) {
      setError("End Date is invalid.");
      setIsLoading(false);
      return;
    }

    if (startDate && endDate && endDate < startDate) {
      setError("Start Date is Invalid.");
      setIsLoading(false);
      return;
    }

    if (endDate && Number.isNaN(Date.parse(endDate))) {
      setError("End Date is Invalid.");
      setIsLoading(false);
      return;
    }

    if (startDate && endDate && endDate < startDate) {
      setError("End Date Cannot be Earlier than Start Date.");
      setIsLoading(false);
      return;
    }

    if (saveTimeRef.current) {
      window.clearTimeout(saveTimeRef.current);
    }

    // step save payload
    try {
      const payload = {
        step: 1,
        completedSteps: [1],
        stepData: {
          1: formData,
        },
        details: formData,
      };

      const res = await fetch('/api/projects/steps/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Failed');
      }

      // local save/backup
      setIsSuccess(true);
      localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));

      // keeps current values so next autosave does not overwrite with blanks

    } catch (error: any) {
      setError(error.message || 'Failed');
    } finally {
      setIsLoading(false);
    }
  }

  return (

    <div className="project-details__background"
    >
      <main
        className="project-details"
        aria-label="Project Details"
      >

        <header className="card-header"
        > Project Details
        </header>

        <form
          onSubmit={handleSubmit}
          autoComplete="on"
          aria-busy={isLoading}
          aria-describedby={error ?
            "input-error" : undefined}
        >

          <fieldset
            className="project-details__fieldset"
            disabled={isLoading}
          >

            <legend className="sr-only"
            > Project Details
            </legend>

            <label htmlFor="projectName"
            > Project Name
            </label>
            <input
              className="form--input"
              id="projectName"
              name="projectName"
              type="text"
              value={formData.projectName}
              onChange={handleChange}
              required
              autoComplete="off"
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ?
                "input-error" : undefined}
              autoFocus
            />

            <label htmlFor="description"
            > Description
            </label>
            <input
              className="form--input"
              id="description"
              name="description"
              type="text"
              value={formData.description ?? ''}
              onChange={handleChange}
              aria-invalid={!!error}
              aria-describedby={error ?
                "input-error" : undefined}
            />

            <label htmlFor="startDate"
            > Start Date
            </label>
            <input
              className="form--input"
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate ?? ''}
              onChange={handleChange}
              aria-invalid={!!error}
              aria-describedby={error ?
                "input-error" : undefined}
            />

            <label htmlFor="endDate"
            > End Date
            </label>
            <input
              className="form--input"
              id="endDate"
              name="endDate"
              type="date"
              value={formData.endDate ?? ''}
              onChange={handleChange}
              aria-invalid={!!error}
              aria-describedby={error ?
                "input-error" : undefined}
            />

            {isSuccess && (
              <div
                className="success__message"
                id="success__message"
                role="status"
                aria-live="polite"
              > Project Details Saved for Step 1.
              </div>
            )}

            {error && (
              <div
                className="error__message"
                id="input-error"
                role="alert"
                aria-live="assertive"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn--primary"
              disabled={isLoading}
            > {isLoading ? "Saving..." : "Submit"}
            </button>
          </fieldset>
        </form>
      </main>
    </div>

  );
}
