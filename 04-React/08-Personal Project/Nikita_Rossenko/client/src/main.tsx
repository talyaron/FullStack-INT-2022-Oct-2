import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import MainPage from './pages/MainPage.tsx';
import Register from './pages/Register.tsx';
import ShipStore from './pages/ShipStore.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {path: "home", element: <Home />},
      {path: "login", element: <Login />},
      {path: "register", element: <Register />},
      {path: "ship-store", element: <ShipStore />}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
