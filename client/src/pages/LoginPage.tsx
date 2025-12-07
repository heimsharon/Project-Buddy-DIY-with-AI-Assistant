
import { useState, type FormEvent, type ChangeEvent} from "react";

const Login = () => {
  const[formState, setFormState] = useState({email:'', password:''});
  const[login, {error, data, loading}] = useLoginMutation(LOGIN_USER);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      
      


    }}}