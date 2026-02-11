import { useState, type FormEvent } from 'react';
import { type ProfileUpdateFormProps } from '../../../types/profile-update';

function isValidEmail(email: string) {
  return /^[^\s@]+0[^\s@]+\.[^\s@]+$/.test(email);
}

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
    const trimmedEmail = updatedEmail.trim();
      if (!trimmedEmail) {
        setError("Please Enter a Valid Email Address.");
        setIsSuccess(false);
        return;
      }
      if (!isValidEmail(trimmedEmail)) {
        setError("Invalid Email Format.");
        setIsSuccess(false);
        return;
      }
      setError(null);
  }

  async function handleEmailChange(e: FormEvent) {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);
    setIsSuccess(false);
    
    const trimmedEmail = updatedEmail.trim();
    if (!emailCurrentPassword) {
      setError("Please Enter Your Current Password to Update Your Email Address");
      setIsLoading(false);
      return;
    }
  
    if (!trimmedEmail) {
      setError("Please Enter a Valid Email Address.");
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Invalid Email Format");
      setIsLoading(false);
      return;
    }

    try {
      await onEmailChange(
        trimmedEmail,
        emailCurrentPassword
      );
      setEmailCurrentPassword('');
      setUpdatedEmail('');//clearing updatedEmail on success
      setIsSuccess(true);
      setError(null);

    } catch (err: any) {
      setError(err.message || "Failed to Update Email.");

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

        <h1
          className="update-email__page--header"
        > Profile Email Update
        </h1>

        <div className="form-input">
          <form
            onSubmit={handleEmailChangeSubmit}
            autoComplete="on"
            aria-busy={isLoading}
            aria-describedby={error ?
              "updated-email-error" : undefined}
          >
            <fieldset
              className="update-email__fieldset"
              disabled={isLoading}
            >

              <legend
                className="sr-only"
              > Update Email
              </legend>

              <h3
                className="update-email__form--header"
              > Update Email
              </h3>

              <label
                htmlFor="updatedEmail"
              > New Email
              </label>

              <input
                className="form--input"
                id="updatedEmail"
                name="updatedEmail"
                type="email"
                placeholder="Enter Your New Email Address Here."
                value={updatedEmail}
                onChange={(event) => {
                  setUpdatedEmail(event.target.value);
                  setIsSuccess(false);
                  setError(null);
                }}
                onBlur={handleEmailBlur}
                autoComplete="email"
                aria-invalid={!!error}
                aria-describedby={error ?
                  "update-email-error" : undefined}
                autoFocus
              />

              <label
                htmlFor="emailCurrentPassword"
              > Current Password
              </label>

              <input
                className="form--input"
                id="emailCurrentPassword"
                name="emailCurrentPassword"
                type="password"
                value={emailCurrentPassword}
                onChange={e => {
                  setEmailCurrentPassword(e.target.value);
                  setIsSuccess(false);
                  setError(null);
                }}
                autoComplete="current-password"
                aria-invalid={!!error}
                aria-describedby={error ?
                  "update-email-error" : undefined}
              />

              {isSuccess && (
                <div
                  className="success__message"
                  id="success__message"
                  role="status"
                  aria-live="polite"
                > Email Updated Successfully!
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

              <button
                className="btn--primary"
                type="submit"
                disabled={isLoading}
              > Update Email
              </button>

            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}