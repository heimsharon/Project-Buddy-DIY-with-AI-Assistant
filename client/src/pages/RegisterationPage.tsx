import { useNavigate, useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Registration() {
  const navigate = useNavigate();
  const [form, setForm] = useState(
    {
      username: '',
      email: '',
      password: ''
    }
  );
  const [isLoading, setIsLoading] = useState(false):
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

}

async Function handleSubmit(e: FormEvent) {
  e.preventDefault();
  setSuccess(false);
  setError(null);

  return;
}

setIsLoading(true);



}