
import { useState, type FormEvent, type ChangeEvent } from "react";
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
    <main className="login__background">
      <div className="login"
        aria-label="Login Page with links to registration and forgot password">
        <div "login-logo"> </div>
      <header className="login__card-header"
      > Project Buddy
      </header>

      <form className="form-input">
        {data ? (
          <p>
            Success! You May Now Head{''}
            <link to="/"
            > To Your Dashboard.</Link>
          </p>
        ) : (

          <form onSubmit={handleSubmit}
            autoComplete="off">

            <fieldset className="login__fieldset">
            </fieldset>
            <legend className="sr-only"
            > Login Form
            </legend>
//////////////</form>


            <label htmlFor="email"
            
            > Email
            </label>
            <Input
              className="login__card-input"

    </main>
        )





        }}
}