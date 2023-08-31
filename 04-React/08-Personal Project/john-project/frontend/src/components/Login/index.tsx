import { useState } from 'react'
import axios from 'axios';
import './Login.css'

interface LoginProps {
  onConnected: () => void;
  onDisplayRegister: () => void
}

export const Login = ({onConnected, onDisplayRegister}: LoginProps) => {
    const [usernameField, setUsernameField] = useState('');
    const [passwordField, setPasswordField] = useState('');
  
    const onChangeUsernameField = (value: string) => setUsernameField(value)
    const onChangePasswordField = (value: string) => setPasswordField(value)
  
    const handleLogin = () => {  
      if (!usernameField || !passwordField) return null;
    
      try {
        axios.post("http://localhost:3010/api/auth/login", { 
          username: usernameField,
           password: passwordField
        }, { withCredentials: true });

        onConnected()
      } catch (error) {
        console.error(error);
      }
    };  
  
    return (
      <div className="login-form">
              <input onChange={(e) => onChangeUsernameField(e.target.value)} placeholder="username" type="text"/>
              <input onChange={(e) => onChangePasswordField(e.target.value)} placeholder="password" type="password"/>
              <button onClick={handleLogin}>LOGIN</button>
              <p>If you want to register, <button onClick={onDisplayRegister}>click here</button></p>
      </div>
    )
}