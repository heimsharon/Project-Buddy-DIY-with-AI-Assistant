import { useEffect, useMemo, useState, type ChangeEvent, type DragEvent, type FormEvent } from 'react';

import { type ProfileUpdateFormProps } from '../../../types/profile-update';

import AvatarImage from './AvatarImage';

const DEFAULT_AVATAR_SRC = '/default-avatar.svg';

export default function AvatarUpdateForm({
  avatar,
  onAvatarChange,
}: ProfileUpdateFormProps) {

  const [updateAvatar, setUpdateAvatar] = useState<File | string | null>(avatar?.trim() ? avatar : DEFAULT_AVATAR_SRC);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const previewUrl = useMemo(() => {
    if (typeof updateAvatar === 'string') return updateAvatar;
    if (updateAvatar instanceof File)
      return URL.createObjectURL(updateAvatar);
    return DEFAULT_AVATAR_SRC;
  }, [updateAvatar]);

  useEffect(() => {
    return () => {
      if (previewUrl.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  async function handleAvatarChange(e: FormEvent) {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    try {
      await onAvatarChange(updateAvatar);
      setUpdateAvatar(DEFAULT_AVATAR_SRC);
      setIsSuccess(true);

    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to Update Avatar");

    } finally {
      setIsLoading(false);
    }
  }

  // update/add file types
  function isValidFile(file: File | null | undefined) {
    return !!file &&
      file.type.startsWith('image/');
  }

  function handleFileSelect(e: ChangeEvent<HTMLInputElement>) {

    const fileSelected = e.target.files?.[0] || null;
    if (!fileSelected) {
      setError("Please Choose an Image File.");
      setIsSuccess(false);
      return;
    }

    if (!isValidFile(fileSelected)) {
      setError("Invalid File Type. Please select an Image File.")
      setIsSuccess(false);
      return;
    }

    setUpdateAvatar(fileSelected);
    setError(null)
    setIsSuccess(false)
  }

  function handleFileDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();

    const droppedFile = e.dataTransfer.files?.[0] || null;
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
          <AvatarImage
            className="avatar-preview"
            avatarUrl={previewUrl}
            size={96}
            alt="Avatar Preview"
          />

          <form
            onSubmit={handleAvatarChange}
            autoComplete="off"
            aria-busy={isLoading}
            aria-describedby={error ? "update-avatar-error"
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
                accept="image/**"
                onChange={handleFileSelect}
                aria-invalid={!!error}
                aria-describedby={error ?
                  "update-avatar-error" : undefined}
                autoFocus
              />

              <div
                className="avatar-drop-zone"
                onDrop={handleFileDrop}
                onDragOver={(e) => e.preventDefault()}
              > Drag and Drop an Image File Here
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
              > Update Avatar
              </button>

            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}

