// import { useState } from 'react'
import axios from 'axios';
import './App.scss'
import { useNavigate } from 'react-router-dom';
import NavBar from './comp/NavBar/NavBar';

function App() {
  const navigate = useNavigate();


  return (
    <>
     <NavBar />

    </>
  )
}

export default App
