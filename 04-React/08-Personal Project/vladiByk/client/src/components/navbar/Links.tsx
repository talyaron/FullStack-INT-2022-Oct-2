import { NavLink } from "react-router-dom";

interface LinkProps {
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Links = ({ setViewCart }: LinkProps) => {
  return (
    <div className="linksDiv">
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      <NavLink className="navLink" to="/products">
        Products
      </NavLink>
      <NavLink
        onClick={() => setViewCart(false)}
        className="navLink"
        to="/store"
      >
        Store
      </NavLink>
      <NavLink className="navLink" to="/about">
        About
      </NavLink>
    </div>
  );
};

export default Links;
