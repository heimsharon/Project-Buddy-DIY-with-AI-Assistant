
import { useState, useNavigate, type FormEvent, type ChangeEvent } from "react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


export default function LoginPage() {
  const navigate = useNavigate();

  //Bypass full login
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/dashboard");
  }


  //Full login commented out to bypass login during development
  //const Login () => {
  //const [formState, setFormState] = useState({ email: '', password: '' });
  //const [login, { error, data, loading }] = useLoginMutation(LOGIN_USER);

  //const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //const { name, value } = e.target;
  //setFormState((prev) => ({ ...prev, [name]: value }));
  //};

  //const handleFormSubmit = async (e: FormEvent) => {
  //e.preventDefault();
  //try {
  //const { data } = await login(
  //{
  //variables: { ...formState },
  //}
  //);
  //Auth.login(data.login.token);
  //} catch (e) {
  //}
  //setFormState({
  //email:'',
  //password:'',
  //})
  //};

  return (
    <div className="login__background">
      <main className="login"
        aria-label="Login Page with links to registration and forgot password">
        <div className="login-logo"> </div>
        <header className="login__card-header"
        > Project Buddy
        </header>

        <form className="form-input"
          onSubmit={handleSubmit}
          autoComplete="off">
          {data ? (
            <p>
              Success! You May Now Head{''}
              <Link to="/"
              > To Your Dashboard.
              </Link>
            </p>
          ) : (         

            <fieldset className="login__fieldset">
              <legend className="sr-only"
              > Login Form
              </legend>
            </fieldset>          

            <label htmlFor="email"
            > Email
            </label>
            <input>
            </input>           

            <label htmlFor="password"
            > Password
            </label>
            
            <div className="remember-me--checkbox">             
              <label htmlFor= "remember-me"
              > Remember Me 
              </label>
            </div>

            <button type="submit"
            className="btn--primary"
            > Login
            </button>
            
            </form >


        <div className="link__forgot-password">
          <Link to="/forgot__password"
            className="btn"
          > Forgot Password?
          </Link>

          <Link to "registration"
          className="btn"
              > Need to Create an Account?
          </Link>
        </div>
        
      
      </main >
    </div >
        )
  ;
      }


