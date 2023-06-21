import { Link } from 'react-router-dom'
import "../style/navBar.scss"
import useGetUser from '../hooks/useGetUser';
import axios from 'axios';

export const NavBar = () => {
const {isAdmin, user} = useGetUser();
const logout = async () =>{
  await axios.get("api/user/delete-cookie");
}

  return (
    <div>
<nav className="primary-nav">
  <ul role="list">
    <li className="nav-link"><Link to="/"><h1 className='home'>Home</h1></Link></li>
   {isAdmin && <li className="nav-link"><Link to="/admin"><h1 className='admin'>Admin</h1></Link></li>}
    <li className="nav-link"><Link to="/about"><h1 className='about'>About</h1></Link></li>
    <li className="nav-link"><Link to="/projects"><h1 className='projects'>Projects</h1></Link></li>
    {user ? <li className="nav-link"><Link onClick={logout} to="/login"><h1 className='logout'>Logout</h1></Link></li> : <li className="nav-link"><Link to="/login"><h1 className='login'>Login</h1></Link></li>}

  </ul>
</nav>
    </div>
  )
}

export default NavBar