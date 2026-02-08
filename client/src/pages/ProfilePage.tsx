import ( useEffect, useState ) from 'react';

import (type UserData) from './types/user';

export default function ProfilePage() {
  const [ userData, setUserData] = useState<UserData | null>(null);
  const [ editMode, setEditMode] = useState(false);
  const [ isSuccess, setIsSuccess ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);
  const [ isLoading ] = useState(false);


useEffect(() => {
  async function fetchUser() {
    cost res = await fetch('/api/auth/me', {
      credentials: 'include', //update auth header
    });
    if (res.ok) {
      const data = await res.json();
      setUserData(data);
  }
  }
  fetchUser();
},[]);
}


