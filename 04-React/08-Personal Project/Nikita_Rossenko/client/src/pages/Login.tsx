import { Link, Outlet } from "react-router-dom";
import VideoSlide from "../components/VideoSlide";
import axios from "axios";

const Login = () => {

    const handleLogin = async (e:any) => {
        try {
            e.preventDefault()
            const userDetails = {username:e.target.username.value, password:e.target.password.value}
            const login = await axios.post("/api/v1.0/users/login", userDetails)
        } catch (error) {
            console.error(error)
        }
    }
  
  return (
    <>
    <Outlet />
    <VideoSlide />
    <div className="login_register_container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input className="input" required type="text" name="username" placeholder="Username"></input>
            <input className="input" required type="password" name="password" placeholder="Password"></input>
            <input type="submit" value="Login"></input>

        </form>
        <Link to={"/register"}>Don't have a user? Register</Link>
    </div>
    </>
  )
}

export default Login