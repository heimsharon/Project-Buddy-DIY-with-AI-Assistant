import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfile } from '../utils/auth';

// Set to true to bypass login for development
const BYPASS_LOGIN_FOR_DEV = true;

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    if (BYPASS_LOGIN_FOR_DEV) {
      setIsAuthenticated(true);
      return;
    }
    getProfile()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
