import { Link, NavLink, Outlet } from 'react-router-dom'
import "./NavBar.scss"

const NavBar = () => {
    try {
        return (
            <div className='mainContainer'>
                <nav className='navBar'>
                    <NavLink to={`/`}><span>home</span></NavLink>
                    <NavLink to={`/about`}><span>about</span></NavLink>
                    <NavLink to={`/contactUs`}><span>contact Us</span></NavLink>
                    <NavLink to={`/faq`}><span>FAQ</span></NavLink>
                    <NavLink to={`/login`}><span>login</span></NavLink>
                    <NavLink to={`/register`}><span>register</span></NavLink>
                </nav>
                <Outlet />
            </div>
        )
    } catch (error) {
        console.error(error)
        return null
    }

}

export default NavBar