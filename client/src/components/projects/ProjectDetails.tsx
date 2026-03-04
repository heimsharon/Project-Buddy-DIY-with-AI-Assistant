import { type ProjectData } from "@/types/project";
import { useState, FormEvent, ChangeEvent } from 'react';


export default function ProjectDetails() {
  const [formData, setForm] = useState<ProjectData>({
    projectName: '',
    projectDescription: '',
    startDate: '',
    projectEndDate: '',
    status: ProjectStatus.Planning,
    materials: [],
    completedSteps: [],
  stepData: {}
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);


    if (!formData.projectName.trim()) {
      setError("Please Enter Project Details");

      return;
    }
    setIsLoading(true);

    try {
      const res = // Todo api endpoint

    const data = await res.json().catch(() => ({}));
      if (!res.ok)
        throw new Error(data.error || 'Failed');

      setIsSuccess(true);
      setForm({
        projectName: '',
        projectDescription: '',
        startDate: '',
        projectEndDate: '',
        status: '',
        materials: [],
        completedSteps: [],
      });

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
            "project-details" : undefined}
        >

          <fieldset
            className="project-details__fieldset"
            disabled={isLoading}
          >

            <legend className="sr-only"
            > Project Details
            </legend>

            <label htmlFor="project name"
            > Project Details
            </label>
            <input
              className="form--input"
              id="projectName"
              name="projectName"
              type="text"
              value={form.projectName}
              onChange={handleChange}
              required
              autoComplete="projectName"
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ?
                "project-details-error" : undefined}
              autoFocus
            />

            <label htmlFor="Project Description"
            > Project Description
            </label>
            <input
              className="form--input"
              id="projectDescription"
              name="projectDescription"
              type="text"
              value={form.projectDescription}
              onChange={onChange}
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ?
                "projectDescription-error" : undefined}
            />


              }
          </fieldset>
        </form>
      </main>
    </div>

  )
}