// import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../comp/NavBar/NavBar';
import '../style/LoginStyle.scss'

interface User {
  username: string;
  password: string;
  email: string;
}

function LoginForm() {
  const navigate = useNavigate();
  const handleLogin = async (ev:any) => {
    try {
      ev.preventDefault();
      const email = ev.currentTarget.elements.email.value;
      const password = ev.currentTarget.elements.password.value;
      if (!email) throw new Error('No email');
      if (!password) throw new Error('No Password');

      const newUser: User = {
        email, password,
        username: '',
      };
      try {
        const response = await axios.post('/api/users/login', newUser);
        const data = response.data;
        const { ok } = data;
        if (ok) {
          navigate("/")
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <NavBar />
    <div className="login-form-container">
    <h2>Register</h2>
    <form className="login-form" onSubmit={handleLogin}>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" className="form-control" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" className="form-control" />
      </div>
      <button type="submit" className="btn-submit">Login</button>
    </form>
  </div>
      </>
  );
}

export default LoginForm;
