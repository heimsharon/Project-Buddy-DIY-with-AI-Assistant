import { useState, type FormEvent } from 'react';

import { type ProfileUpdateFormProps } from '../../../types/profile-update';
import { validateEmailField, validateEmailUpdateForm } from '../../../utils/validators/profile';

export default function EmailUpdateForm({
  email,
  onEmailChange,
}: ProfileUpdateFormProps) {
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [emailCurrentPassword, setEmailCurrentPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleEmailBlur() {
    const result = validateEmailField(updatedEmail);
    if (!result.isValid) {
      setError(result.message);
      setIsSuccess(false);
      return;
    }
    setError(null);
  }

  async function handleEmailChangeSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setIsSuccess(false);

    const validation = validateEmailUpdateForm({
      updatedEmail,
      currentPassword: emailCurrentPassword,
    });

    if (!validation.isValid) {
      setError(validation.message);
      setIsLoading(false);
      return;
    }

    try {
      await onEmailChange(updatedEmail.trim(), emailCurrentPassword);
      setEmailCurrentPassword('');
      setUpdatedEmail('');
      setIsSuccess(true);
      setError(null);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Failed to update email.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="update-email__background">
      <main
        className="update-email__container"
        aria-label="Profile Update Email Page"
      >
        <h1 className="update-email__page--header">Profile Email Update</h1>

        <div className="form-input">
          <form
            onSubmit={handleEmailChangeSubmit}
            autoComplete="on"
            aria-busy={isLoading}
            aria-describedby={error ? 'update-email-error' : undefined}
          >
            <fieldset className="update-email__fieldset" disabled={isLoading}>
              <legend className="sr-only">Update Email</legend>
              <h3 className="update-email__form--header">Update Email</h3>

              <label htmlFor="updatedEmail">New Email</label>
              <input
                className="form--input"
                id="updatedEmail"
                name="updatedEmail"
                type="email"
                placeholder="Enter your new email address here."
                value={updatedEmail}
                onChange={(e) => {
                  setUpdatedEmail(e.target.value);
                  setIsSuccess(false);
                  setError(null);
                }}
                onBlur={handleEmailBlur}
                autoComplete="email"
                aria-invalid={!!error}
                aria-describedby={error ? 'update-email-error' : undefined}
                autoFocus
              />

              <label htmlFor="emailCurrentPassword">Current Password</label>
              <input
                className="form--input"
                id="emailCurrentPassword"
                name="emailCurrentPassword"
                type="password"
                value={emailCurrentPassword}
                onChange={(e) => {
                  setEmailCurrentPassword(e.target.value);
                  setIsSuccess(false);
                  setError(null);
                }}
                autoComplete="current-password"
                aria-invalid={!!error}
                aria-describedby={error ? 'update-email-error' : undefined}
              />

              {isSuccess && (
                <div
                  className="success__message"
                  id="success__message"
                  role="status"
                  aria-live="polite"
                >
                  Email updated successfully.
                </div>
              )}

              {error && (
                <div
                  className="error__message"
                  id="update-email-error"
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </div>
              )}

              <button className="btn--primary" type="submit" disabled={isLoading}>
                Update Email
              </button>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}