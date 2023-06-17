// import { Link } from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";
import "./NavBarStyle.scss";
import axios from "axios";

const NavBar = () => {
  const navigate = useNavigate();

  async function logout() {
    try {
      const response = await axios.get('/api/users/logout', { withCredentials: true });
      
      if (response.status === 200) {
        document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate("/Login")

      } else {
        throw new Error('Logout request failed');
      }
    } catch (error) {
      console.error(error);
    }
  }
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
              <Link to="/Login" onClick={logout}>Logout</Link>
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