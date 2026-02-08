import { useState, type FormEvent } from 'react';
import { type ProfileUpdateFormProps } from '@/types/profile-update';


export default function EmailUpdateForm({
  email,
  onEmailChange,
}: ProfileUpdateFormProps) {

  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [emailCurrentPassword, setEmailCurrentPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleEmailChange(e: FormEvent) {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    if (!emailCurrentPassword) {
      setError("Please Enter Your Current Password to Update Login/Account Email Address");
      setIsLoading(false);
      return;
    }

    try {
      await onEmailChange(
        updatedEmail,
        emailCurrentPassword
      );
      setEmailCurrentPassword('');
      setIsSuccess(true);

    } catch (err: any) {
      setError(err.message || "Failed to Update Email");


    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div className="update-email__background">
      <main className="update-email__container"
        aria-label="Profile Update Email Page"
      >
        <h1 className="update-email__page--header"
        > Profile Email Update
        </h1>

        <div className="form-input">
          <form
            onSubmit={handleEmailChange}
            autoComplete="on"
          >
            <fieldset
              className="update-email__fieldset">
              <legend className="sr-only"
              > Update Email
              </legend>
              <h3
                className="update-email__form--header"
              > Update Email
              </h3>
              <label htmlFor="updatedEmail"
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
                  setError(null);
                }}
                autoComplete="email"
                aria-invalid={!!error}
                aria-describedby={error ?
                  "update-email-error" : undefined}
                autoFocus
              />

              <label htmlFor="emailCurrentPassword"
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
                  aria-live="polite"
                >
                  {error}
                </div>
              )}

              <button
                className="btn--primary"
                type="submit"
              > Update Email
              </button>

            </fieldset>
          </form>
        </div>
      </main>
    </div>

  );
}