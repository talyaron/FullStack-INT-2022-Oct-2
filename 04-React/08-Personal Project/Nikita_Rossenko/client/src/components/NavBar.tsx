import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInUser, setloggedInUser] = useState("");
    useEffect(() => {
        (async () => {
            const response:any = await axios.get(
                "/api/v1.0/users/check-logged-in"
            );
            if (response.data.ok === true){
                setLoggedIn(true)
                setloggedInUser(response.data.user)
            }
        })();
    }, []);

     const handleLogout = async () => {
        setLoggedIn(false)
        const response:any = await axios.get(
            "/api/v1.0/users/logout"
        );
        console.log("logout")
    }

    return (
        <div className="navBar">
            <div className="navBar_container">
                <div className="navBar_logo">
                    <img id="logo" src="./src/assets/images/logo.png" />
                </div>
                <div className="navBar_links">
                    <div className="links">
                        <Link className="link" to={"/home"}>
                            Home
                        </Link>
                        {loggedIn?<Link to={"/ship-store"} className="link">
                            Starship Store
                        </Link>: <Link to={"/login"} className="link">
                            Starship Store
                        </Link>}
                        <a className="link" href="/">
                            Environment
                        </a>
                        <a className="link" href="/">
                            Contact
                        </a>
                    </div>
                    <div className="logoutLoginDiv">
                        <div className="accountIcon">
                            {loggedIn?<a className="link">Profile</a>: <Link className="link" to={"/login"}>Login</Link>}
                            {loggedIn ? (
                                <div className="profileDetails">
                                    <p className="username" id="username">{loggedInUser}</p>
                                    <a className="link" onClick={handleLogout} id="loginLogoutBtn">Logout</a>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
