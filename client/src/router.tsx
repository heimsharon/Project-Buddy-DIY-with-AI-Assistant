import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import AIAssistant from './pages/AIAssistant';
import CreateProjectPage from './pages/CreateProjectPage';
import ProtectedRoute from './components/shared/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />, // All children require auth
    children: [
      {
        path: '/projects',
        element: <ProjectsListPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/ai',
        element: <AIAssistant />,
      },
      {
        path: '/create-project',
        element: <CreateProjectPage />,
      },
    ],
  },
]);
