import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import PersonList from './pages/persons/PersonList';
import PersonForm from './pages/persons/PersonForm';
import { ThemeProvider } from './contexts/Theme.context';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate replace to="/persons" />,
      },
      {
        path: '/persons',
        children: [
          {
            index: true,
            element: <PersonList />,
          },
          {
            path: 'add',
            element: <PersonForm/>,
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);