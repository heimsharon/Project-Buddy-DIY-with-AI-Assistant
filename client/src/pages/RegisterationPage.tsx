import { useNavigate, useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Registration() {

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const [form, setForm] = useState({ 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  }

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setIsSuccess(false);
    setError(null);

    const payload = {
      username: form.username.trim(),
      email: form.email.trim(),
      password: form.password
    };

    if (!isValidEmail(payload.email)) {
      setError("Invalid Email Format");
      setIsLoading(false);
      return;
    }

    if (payload.password.length < 10) {
      setError("Password too Short. Must Be at Least 10 Characters");
      setIsLoading(false);
      return;
    }

    if (!/[A-Z]/.test(payload.password)) {
      setError("Password Must Include at Least One Uppercase Letter.");
      setIsLoading(false);
      return;
    }

    if (!/[a-z]/.test(payload.password)) {
      setError("Password Must Include at Least One Lowercase Letter.");
      setIsLoading(false);
      return;
    }

    if (!/[0-9]/.test(payload.password)) {
      setError("Password Must Include at Least One Digit.");
      setIsLoading(false);
      return;
    }

    if (!/[^\w\s]/.test(payload.password)) {
      setError("Password Must Include at Least One Special Character.");
      setIsLoading(false);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords Do Not Match");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type', 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok)
        throw new Error(data.error || 'Failed');

      setIsSuccess(true);
      setForm({ username: '', email: '', password: '', confirmPassword: '' });
      navigate('/profile-page');

    } catch (err: any) {
      setError(err.message || 'Failed');

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="registration-page__background">
      <main
        className="registration"
        aria-label="Registration Page"
      >

        <header className="card-header"
        > Create Account
        </header>

        <form
          onSubmit={submit}
          autoComplete="off"
          aria-busy={isLoading}
          aria-describedby={error ?
            "registration-error" : undefined}
        >

          <fieldset
            className="register__fieldset"
            disabled={isLoading}
          >

            <legend className="sr-only"
            > Registration Form
            </legend>

            <label htmlFor="username"
            > User Name
            </label>
            <input
              className="form--input"
              id="username"
              name="username"
              type="text"
              value={form.username}
              onChange={onChange}
              required
              autoComplete="username"
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ?
                "registration-error" : undefined}
              autoFocus
            />

            <label htmlFor="email"
            > Email
            </label>
            <input
              className="form--input"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Enter Your Email"
              required
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ?
                "registration-error" : undefined}
            />

            <label htmlFor="password"
            > Password
            </label>
            <input
              className="form--input"
              id="password"
              name="password"
              type="password"
              placeholder="Enter Your Password."
              value={form.password}
              onChange={onChange}
              required
              autoComplete="new-password"
              pattern="(?=.*[A-Z])(?=.*[^\w\s]).{10,}"
              title="At Least 10 Characters, 1 uppercase and 1 special character"
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ?
                "registration-error" : undefined}
            />

            <label htmlFor="confirmPassword"
            > Confirm Password
            </label>
            <input
              className="form--input"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={onchange}
              required
              autoComplete="new-password"
              aria-invalid={!!error}
              aria-describedby={error ? "registration-error" : undefined}
            />

            {isSuccess && (
              <div
                className="success__message"
                id="success__message"
                role="status"
                aria-live="polite"
              > Registered
              </div>
            )}

            {error && (
              <div
                className="error__message"
                id="registration-error"
                role="alert"
                aria-live="polite"
              >{error}
              </div>
            )}

            <button
              className="btn--primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Register'}
            </button>

          </fieldset>
        </form>

        <Link
          to="login"
          className="register__btn--login"
        > Already Have an Account? Login
        </Link>

      </main>
    </div>
  );
}