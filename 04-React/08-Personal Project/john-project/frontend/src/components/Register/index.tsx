import { useState } from 'react'
import axios from 'axios';
import './Register.css'

interface RegisterProps {
  onConnected: () => void;
  onDisplayLogin: () => void;
}

export const Register = ({onConnected, onDisplayLogin}: RegisterProps) => {
    const [usernameField, setUsernameField] = useState('');
    const [passwordField, setPasswordField] = useState('');
  
    const onChangeUsernameField = (value: string) => setUsernameField(value)
    const onChangePasswordField = (value: string) => setPasswordField(value)
  
    const handleLogin = () => {  
      if (!usernameField || !passwordField) return null;
    
      try {
        axios.post("http://localhost:3010/api/auth/register", { 
          username: usernameField,
           password: passwordField
        }, { withCredentials: true });

        onConnected()
      } catch (error) {
        console.error(error);
      }
    };  
  
    return (
      <div className="register-form">
              <input onChange={(e) => onChangeUsernameField(e.target.value)} placeholder="username" type="text"/>
              <input onChange={(e) => onChangePasswordField(e.target.value)} placeholder="password" type="password"/>
              <button onClick={handleLogin}>REGISTER</button>
              <p>If you want to login, <button onClick={onDisplayLogin}>click here</button></p>
      </div>
    )
}