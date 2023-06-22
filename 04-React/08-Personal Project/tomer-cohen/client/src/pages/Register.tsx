// import { useState } from 'react'
import '../style/RegisterStyle.scss'
import axios from "axios";
import NavBar from "../comp/NavBar/NavBar";
import { Link } from 'react-router-dom';

export interface User {
  userName: string;
  _id: string;
  password:string
  email: string;
  userId:string
}

function Register() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target);
    const userName = e.target.userName.value;
    const password = e.target.password.value;
    const email = e.target.email.value;


    console.log(userName, password,email);
    const { data } = await axios.post("/api/users/add-user", {
      userName,
      password,
      email
    });
    console.log(data);
  }
  return (
    <>
      <NavBar />
      <div className="login-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="text" name="userName" placeholder="" />
          <label>User Name</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" placeholder="" />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="email" name="email" placeholder="" />
          <label>Email</label>
        </div>
        <input className="submit" type="submit" value="Submit" />
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </>
  );
}

export default Register;