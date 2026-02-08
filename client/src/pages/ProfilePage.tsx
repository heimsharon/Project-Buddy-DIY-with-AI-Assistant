import ( useEffect, useState ) from 'react';

import (type UserData) from '../';

export default function ProfilePage() {
  const [ userData, setUserData] = useState<UserData | null>(null);
  const [ editMode, setEditMode] = useState(false);
  const [ isSuccess, setIsSuccess ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);
  const [ isLoading ] = useState(false);





