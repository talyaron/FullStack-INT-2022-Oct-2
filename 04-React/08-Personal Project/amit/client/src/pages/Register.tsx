import axios from 'axios';
import "./Register.scss"
import { useNavigate } from 'react-router-dom';

const Register = () => {
    try {
        const navigate = useNavigate();

        async function handleUserRegister(ev: any) {
            try {
                ev.preventDefault()
                if (!ev.target.name.value) throw new Error("no name entered")
                if (!ev.target.password.value) throw new Error("no password entered")
                const name = ev.target.name.value
                const password = ev.target.password.value
                const user: any = { name, password }
                await axios.post("/api/users/create-user", user)
                navigate("/login")

            } catch (error) {
                console.error(error)
            }
        }

        return (
            <form className="register" onSubmit={handleUserRegister}>
                <input type="text" id="name" placeholder="Enter User Name" required />
                <input type="password" id="password" placeholder="Enter Password" required />
                <button type="submit">Register</button>
            </form>
        )
    } catch (error) {
        console.error(error)
        return null
    }

}
export default Register

