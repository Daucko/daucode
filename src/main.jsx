import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/', element: <About /> },
      { path: '/tech-stack', element: <TechStack /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
