// import { useState } from 'react'
import axios from 'axios';
import './App.scss'
import { useNavigate } from 'react-router-dom';
import NavBar from './comp/NavBar/NavBar';
export interface Recipe{
  title:string;
  description: string;
  author: string
};

export interface User {
  username: string;
  password: string;
  email: string;
}


function App() {
  const navigate = useNavigate();


  return (
    <>
     <NavBar />

    </>
  )
}

export default App
