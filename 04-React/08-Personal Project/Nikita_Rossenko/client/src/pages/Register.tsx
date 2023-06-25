import { Link, Outlet } from "react-router-dom";
import VideoSlide from "../components/VideoSlide";
import axios from "axios";

const Register = () => {
    async function handleRegister(e: any) {
        e.preventDefault();
        const userDetails = {
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value,
        };
        const login = await axios.post(
            "http://localhost:5000/api/v1.0/users/login",
            userDetails
        );
        console.log(login);
    }

    return (
        <>
            <Outlet />
            <VideoSlide />
            <div className="login_register_container">
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <input
                        className="input"
                        required
                        type="text"
                        name="username"
                        placeholder="Username"
                        value="nikita"
                    ></input>
                    <input
                        className="input"
                        required
                        type="text"
                        name="email"
                        placeholder="Email"
                        value="nikita.rossenko@outlook.com"
                    ></input>
                    <input
                        className="input"
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        value="123"
                    ></input>
                    <input type="submit" value="Register"></input>
                </form>
                <Link to={"/login"}>Have a user? Login</Link>
            </div>
        </>
    );
};

export default Register;
