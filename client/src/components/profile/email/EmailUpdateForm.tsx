import { useSate, type ChangeEvent, type FormEvent } from 'react';

interface ProfileUdeateFormProps {
  email: string;
  avatar: string | null;
  onEmailChange: (email: string, password: string) => void;
  onPasswordChange: (password: string) => void;
  onAvatarChange: (avatar: string | null, password: string) => void;
}

export default function EmailUpdateForm({
  email,
  password,
}: ProfileUdeateFormProps) {

  const [updatedEmail, setUpdatedEmail] = useSate(email);
  const [emailCurrentPassword, setEmailCurrentPassword] = useSate('');
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useSate<string | null>(null);
  const [isLoading, setIsLoading] = useSate(false);

  async function handleEmailChange(e: FormEvent) {
    e.preventDefault()

      if (isLoading) return;
    setIsLoading(true);
    setEmailSuccess(false);
    setEmailError(null);

    if (!emailCurrentPassword) {
      setEmailError("Please Enter Your Current Password to Update Login/Account Email Address");
      setIsLoading(false);
      return;
    }

    try {
      await onEmailChange(
        updatedEmail,
        emailCurrentPassword
      );
      setEmailCurrentPassword('');
      setEmailSuccess(true);

    } catch (err: any) {
      setEmailError(err.message || "Failed to Update Email");


    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div className="profile-update-email__background">
      <main className="profile-update-email__container"
        aria-label="Profile Update Page"
      >
        <h1 className="profile-update-email__page--header"
        > Profile Email Update
        </h1>

        <form
          onSubmit={handleEmailChange}
          autoComplete="on"
        >
          <fieldset
            className="profile-update-email__fieldset"
            disabled={isLoading}
          >
            <legend className="sr-only"
            > Update Email
            </legend>
            <h3
              className="profile-update-email__form--header"
            > Update Email
            </h3>
            <label htmlFor="updatedEmail"
            > New Email
            </label>

            <input
              className="profile-update-email__form--input"
              id="updatedEmail"
              name="updatedEmail"
              type="email"
              value={updatedEmail}
              onChange={e. => {
              setUpdatedEmail(e.target.value);
            setEmailError(null);
                  }}
            autoComplete="email"
            aria-invalid={!!emailError}
            area-describedby={emailError ?
              "update-email-error" : undefined}
            autoFocus
                  />

            <label htmlFor="emailCurrentPassword"
            > Current Password
            </label>

            <input
              className="profile-update-email__form--input"
              id="emailCurrentPassword"
              name="emailCurrentPassword"
              type="password"
              value={emailCurrentPassword}
              onChange={e => {
                setEmailCurrentPassword(e.target.value);
                setEmailError(null);
              }}
              autoComplete="current-password"
              aria-invalid={!!emailError}
              aria-describedby={emailError ?
                "current-email-error" : undefined}
            />

            {isEmailSuccess && (
              <div
                className="profile-update-email--success"
                role="status"
              > Email Updated Successfully!
              </div>
            )}

            {emailError && (
              <div
                className="profile-update-email--error"
                id="profile-update-email--error"
                role="alert"
              >
                {emailError}
              </div>
            )}

            <button
              type="btn--primary"
            > Update Email
            </button>

          </fieldset>
        </form>
      </main>
    </div>
  );
}