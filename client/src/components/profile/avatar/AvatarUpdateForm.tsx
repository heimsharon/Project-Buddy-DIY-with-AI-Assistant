import { useState, type ChangeEvent, type FormEvent, type DragEvent } from 'react';
import { type ProfileUpdateFormProps } from '../../../types/profile-update';
import { AvatarImage } from './AvatarImage';


export default function AvatarUpdateForm({
  avatar,
  onAvatarChange,
}: ProfileUpdateFormProps) {

  const [updateAvatar, setUpdateAvatar] = useState(avatar);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAvatarChange(e: FormEvent) {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);
    setIsSuccess(false);

    try {
      await onAvatarChange(
        updateAvatar
      );
      setUpdateAvatar('');
      setIsSuccess(true);

    } catch (err: any) {
      setError(err.message || "Failed to Update Avatar");

    } finally {
      setIsLoading(false);
    }
  }


  function isValidFile(file) {
    return file &&
      file.type.startsWith('image/');
  }

  function handleFileSelect(e: ChangeEvent<HTMLInputElement>) {


    const fileSelected = e.target.files?.[0];
    if (!!fileSelected) {
      setError("Please Choose an Image File.");
      setIsSuccess(false);
      return;
    }

    if (isValidFile(fileSelected)) {
      setError("Invalid File Type. Please select an Image File.")
      setIsSuccess(false);
      return;
    }
    setUpdateAvatar(fileSelected);
    setError(null)
    setIsSuccess(false)
    return;

  }

  function handleFileDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) {
      setError("Please Add an Image File.")
      setIsSuccess(false);
      return;
    }
    if (!isValidFile(droppedFile)) {
      setError("Invalid File Type. Please Upload an Image.");
      setIsSuccess(false);
      return;
    }
    setUpdateAvatar(droppedFile);
    setError(null);
    setIsSuccess(false)
  }


  return (
    <div className="update-avatar-page__background">
      <main
        className="update-avatar__container"
        aria-label="Update Avatar Page"
      >

        <h1
          className="update-avatar-page__header"
        > Update Avatar
        </h1>

        <div className="form-input">

          <form
            onSubmit={handleAvatarChange}
            autoComplete="update-avatar"
            aria-busy={isLoading}
            area-describedby={error ? "update-avatar-error"
              : undefined}
          >
            <fieldset
              className="update-avatar__fieldset"
              disabled={isLoading}
            >

              <legend
                className="sr-only"
              > Update Avatar
              </legend>

              <h3
                className="update-avatar-form__card--header"
              > Update Avatar
              </h3>

              <label
                htmlFor="updateAvatar"
              > Update Avatar
              </label>

              <input
                className="form--input"
                id="updateAvatar"
                name="updateAvatar"
                type="file"
                placeholder="Choose Image File"
                onChange={e =>
                  setUpdateAvatar(e.target.files?.[0] || null);
              setIsSuccess(false);
              setError(null);
                }
              autoComplete="avatar"
              aria-invalid={!!error}
              aria-describedby={error ?
                "update-avatar-error" : undefined}
              autoFocus
              />

              <div
                className="avatar-drop-zone"
                onDrop={handleFileDrop}
                onDragOver={e => e.preventDefault()}
              > Drag and Drop an Image here, or use file input below
              </div>

              {isSuccess && (
                <div
                  className="success__message"
                  id="success__message"
                  role="status"
                  aria-live="polite"
                > Avatar Updated Successfully
                </div>
              )}

              {error && (
                <div
                  className="error__message"
                  id="update-avatar-error"
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </div>
              )}

              <button
                className="btn--primary"
                type="submit"
                disabled={isLoading}
              > Updated Avatar
              </button>

            </fieldset>
          </form>

        </div>
      </main>
    </div>
  )
}

