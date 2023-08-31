import { useState, useMemo } from 'react'
import { Login } from "../../components/Login/index"
import { Register } from "../../components/Register/index"

interface AuthProps {
  onConnected: () => void;
}

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const Auth = ({onConnected}: AuthProps) => {
    const [type, setType] = useState(LOGIN);

    const onDisplayLogin = () => setType(LOGIN)
    const onDisplayRegister = () => setType(REGISTER)

    const authRender = useMemo(() => ({
      LOGIN: () => <Login onConnected={onConnected} onDisplayRegister={onDisplayRegister} />,
      REGISTER: () => <Register onConnected={onConnected} onDisplayLogin={onDisplayLogin} />,
    }), [onConnected])
  
    return authRender[type]()
}