// import { Link } from 'react-router-dom'
import { Link } from "react-router-dom";
import "./NavBarStyle.scss";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="left">
          <li>
            <Link to="/">
              <h1>Recipes</h1>
            </Link>
          </li>
        </div>

        <div className="right">
          <input type="checkbox" id="check"></input>

          <label htmlFor="check" className="checkBtn">
            <i className="fa fa-bars"></i>
          </label>

          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;