import {useEffect, useState } from 'react';
import { ProfileUpdateFormProps } from '@/types/profile-update';
import {
  ProfileAvatar,
  AvatarUpdateForm,
  EmailUpdateForm,
  PasswordUpdateForm,
  UserSettings
} from '../assets/components/indexProfile';

export default function ProfilePage() {
  const [ userData, setUserData] = useState<UserData | null>(null);
  const [ editMode, setEditMode] = useState(false);
  const [ isSuccess, setIsSuccess ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);
  const [ isLoading, setIsLoading ] = useState(false);


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


