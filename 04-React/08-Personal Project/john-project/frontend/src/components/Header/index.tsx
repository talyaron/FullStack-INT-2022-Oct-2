import { Link } from "react-router-dom";
import './Header.css'
import { Logout } from "../Logout/index";

export const Header = () => {
    return  <nav className="navbar">
        <ul className="navbar-list">
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/tasks">Tasks</Link></li>
            <li><Link className="link" to="/history">History</Link></li>
            <li>
                <Logout />
            </li>
        </ul>
    </nav>
}