import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import Navigation from './components/shared/NavBar';
import './assets/styles/index.css';

export default function App() {
  return (

    <Suspense fallback={< div > Loading...</div >}>
      <RouterProvider router={router} />
    </Suspense >
  );
}