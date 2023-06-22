import axios from 'axios';
import "./Login.scss"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    try {
        const navigate = useNavigate();

        async function handleLogin(ev: any) {
            try {
                ev.preventDefault()
                if (!ev.target.name.value) throw new Error("no name entered")
                if (!ev.target.password.value) throw new Error("no password entered")
                const name = ev.target.name.value
                const password = ev.target.password.value
                const user: any = { name, password }
                const { data } = await axios.post("/api/users/login", user)
                if (data.ok) navigate("/")

            } catch (error) {
                console.error(error)
            }
        }

        return (
            <form className="login" onSubmit={handleLogin}>
                <input type="text" id="name" placeholder="Enter User Name" required />
                <input type="password" id="password" placeholder="Enter Password" required />
                <button type="submit">login</button>
            </form>
        )
    } catch (error) {
        console.error(error)
        return null
    }

}
export default Login

