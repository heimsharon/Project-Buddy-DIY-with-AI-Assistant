
import { useState, type FormEvent, type ChangeEvent} from "react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Login = () => {
  const[formState, setFormState] = useState({email:'', password:''});
  const[login, {error, data, loading}] = useLoginMutation(LOGIN_USER);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login(
        { variables: {...formState},
        }
      );
      
      
      


    }}}