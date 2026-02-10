import { useState, type ChangeEvent, type FormEvent } from 'react';

import { type ProfileUpdateFormProps } from '@/types/profile-update';

export default function PasswordUpdateForm({
  password,
  onPasswordChange,
}: ProfileUpdateFormProps) {

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePasswordChange(e: FormEvent) {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    if (!newPassword !== confirmNewPassword) {
      setError("Passwords Do Not Match");
      setIsLoading(false);
      return;
    }

    try {
      await onPasswordChange(
        newPassword
      );
      setNewPassword('');
      setConfirmNewPassword('');
      setIsSuccess(true);

    } catch (err: any) {
      setError(err.message || "Failed to Update Password");

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className="update-password-page__background">
      <main
        className="update-password__container"
        aria-label="Update Password Page">

        <h1
          className="update-password__page--header"
        > Password Update
        </h1>

        <div className="form-input">
          <form
            onSubmit={handlePasswordChange}
            autoComplete="off"
            aria-busy={isLoading}
            aria-describedby={error ? "update-password-error" : undefined}
          >
            <fieldset
              className="update-password__fieldset"
              disabled={isLoading}
            >

              <legend
                className="sr-only"
              > Update Password
              </legend>

              <h3
                className="update-password-form__card--header"
              > Update Password
              </h3>

              <label htmlFor="updatePassword"
              > New Password
              </label>

              <input
                className="form--input"
                id="updatePassword"
                name="updatePassword"
                type="password"
                placeholder="Enter Your New Password Here"
                value={newPassword}
                onChange={(event) => {
                  setNewPassword(event.target.value);
                  setIsSuccess(false);
                  setError(null);
                }}
                autoComplete="update-password"
                aria-invalid={!!error}
                aria-describedby={error ? "update-password-error" : undefined}
                autoFucus
              />

              <label
                htmlFor="confirmNewPassword"
              > Confirm New Password
              </label>

              <input
                className="form--input"
                id="confirmNewPassword"
                name="confirmNewPassword"
                type="password"
                value={confirmNewPassword}
                onChange={event {
                        setConfirmNewPassword(event, EventTarget.value);
              setError(null);
                      }}
              autoComplete="confirm-new-password"
              aria-invalid={!!error}
              aria-describedby={error ? "confirm-new-password-error" : undefined}
                      />

              {isSuccess && (
                <div
                  className="success__message"
                  id="success__message"
                  role="status"
                  aria-live="polite"
                > Password Updated Successfully
                </div>
              )}

              {error &&
                <div
                  className="error__message"
                  id="update-password-error"
                  role="alert"
                  aria-live="polite"

                > {isLoading ? 'Submitting...' : 'Updating'} {error}
                </div>}

              <button
                className="btn--primary"
                type="submit"
                disabled={isLoading}
              > Update Password
              </button>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}