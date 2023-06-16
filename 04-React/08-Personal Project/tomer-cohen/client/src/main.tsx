import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Register from './pages/Register.tsx'
import ErrorPage from "../src/pages/ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  }
  // {
  //   path: "/about",
  //   element: <About />,
  //   children: [
  //     {
  //       path: "/about/project/:projectId",
  //       element: (
  //         <Project setProject={undefined} projects={[]} project={undefined} />
  //       ),
  //     },
  //   ],
  //   errorElement: <ErrorPage />,
  // },

]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
