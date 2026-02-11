import { useState, type ChangeEvent, type FormEvent } from 'react';
import { type ProfileUpdateFormProps } from '../../../types/profile-update';

export default function ChangePasswordForm({
  password,
  onPasswordChange,
}: ProfileUpdateFormProps) {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleChangePassword(e: FormEvent) {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    if (newPassword.length < 10) {
      setError("Password to Short;Must Be at Least 10 Characters");
      setIsLoading(false);
      return;
    }

    if (!/[A-Z]/.test(newPassword)) {
      setError("Password Must Include at Least One Uppercase Letter.");
      setIsLoading(false);
      return;
    }

    if (!/[a-z]/.test(newPassword)) {
      setError("Password Must Include at Least One Lowercase Letter.");
      setIsLoading(false);
      return;
    }

    if (!/[0-9]/.test(newPassword)) {
      setError("Password Must Include at Least One Digit.");
      setIsLoading(false);
      return;
    }

    if (!/[^\w\s]/.test(newPassword)) {
      setError("Password Must Include at Least One Special Character".);
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("Passwords Do Not Match");
      setIsLoading(false);
      return;
    }

    try {
      await onPasswordChange(
        newPassword
      );
      setNewPassword('');
      setConfirmPassword('');
      setIsSuccess(true);

    } catch (err: any) {
      setError(err.message || "Failed to Change Password");

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="change-password-page__background">
      <main
        className="change-password__container"
        aria-label="Change Password Page"
      >

        <h1
          className="change-password__page--header"
        >  Change Password
        </h1>

        <div className="form-input">
          <form
            onSubmit={handleChangePassword}
            autoComplete="new-password"
            aria-busy={isLoading}
            aria-describedby={error ? "change-password-error" : undefined}
          >

            <fieldset
              className="change-password__fieldset"
              disabled={isLoading}
            >

              <legend
                className="sr-only"
              > Change Password
              </legend>

              <h3
                className="change-password-form__card--header"
              > Change Password
              </h3>

              <label
                htmlFor="newPassword"
              > New Password
              </label>

              <input
                className="form--input"
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="Enter Your New Password"
                value={newPassword}
                onChange={(event) => {
                  setNewPassword(event.target.value);
                  setIsSuccess(false);
                  setError(null);
                }}
                autoComplete="new-password"
                pattern="(?=.*[A-Z])(?=.*[^\w\s]).{10,}"
                title="At Least 10 Characters, 1 uppercase and 1 special character"
                aria-required="true"
                aria-invalid={!!error}
                aria-describedby={error ? "change-password-error" : undefined}
                autoFocus
              />

              <label
                htmlFor="confirmPassword"
              > Confirm New Password
              </label>

              <input
                className="form--input"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={event => {
                  setConfirmPassword(event.target.value);
                  setError(null);
                }}
                autoComplete="new-password"
                aria-invalid={!!error}
                aria-describedby={error ? "confirm-password-error" : undefined}
              />

              {isSuccess && (
                <div
                  className="success__message"
                  id="success__message"
                  role="status"
                  aria-live="polite"
                > Password Changed Successfully
                </div>
              )}

              {error && (
                <div
                  className="error__message"
                  id="change-password-error"
                  role="alert"
                  aria-live="polite"

                > {isLoading ? 'Submitting...' : ''} {error}
                </div>
              )}

              <button
                className="btn--primary"
                type="submit"
                disabled={isLoading}
              > Change Password
              </button>

            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}