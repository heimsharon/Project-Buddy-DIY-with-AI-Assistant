
import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';


type LoginFormState = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<LoginFormState>({
    email: "",
    password: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};

async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setError(null);

  //Bypass full login for development
  setIsSuccess(true);
  navigate("/dashboard");
}

return (
  <div className="login__background">
    <main className="login">
      <div className="login-logo" aria-hidden="true"> </div>
      <h1 className="login__card-header"
      > Project Buddy
      </h1>

      <div className="form-input">
        <form onSubmit={handleFormSubmit}
          autoComplete="on"
          noValidate>

          <fieldset className="login__fieldset">
            <legend className="sr-only"
            > Login Form
            </legend>


            <label htmlFor="email"
            > Email
            </label>
            <input
              className="form--input"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ?
                "login-error" : undefined}
              autoFocus
            />

            <label htmlFor="password"
            > Password
            </label>
            <input
              className="form--input"
              id="password"
              name="password"
              type="password"
              placeholder="Your Password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ?
                "register-error" : undefined}
            />

            {error && (
              <div
                className="error__message"
                id="login-error"
                role="alert"
                aria-live="polite"
              >
                {error}
              </div>
            )}

            {isSuccess && (
              <div
                className="success__message"
                id="success__message"
                role="status"
                aria-live="polite"
              > Logged In
              </div>
            )}

            <button type="submit"
              className="btn--primary"
              disabled={isLoading}
              > Login
            </button>
          </fieldset>


          <div className="remember-me--checkbox">
            <input
              id="remember-me"
              name="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me"
            > Remember Me
            </label>
          </div>
        </form>
      </div>

      <div className="link__forgot-password">
        <Link to="/forgot__password"
          className="btn"
        > Forgot Password?
        </Link>

        <Link to="/registration"
          className="btn"
        > Need to Create an Account?
        </Link>
      </div>
    </main >
  </div >
);
  }



