import { CiUser } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

interface IconsProps {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Icons = ({ viewCart, setViewCart }: IconsProps) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    setViewCart((prev) => (prev = !prev));
  };

  const handleProfileClick = async () => {
    try {
      const { data } = await axios.get("api/v1/users/getUser");

      const user = await data.user;

      navigate("/profile");
    } catch (error) {
      console.error(error);
      navigate("/login");
    }
  };

  const location = useLocation();

  return (
    <div className="iconsDiv">
      <CiUser className="icon" onClick={handleProfileClick} />
      <AiOutlineHeart className="icon" />
      {viewCart && location.pathname === "/store" ? (
        <MdOutlineAddShoppingCart className="icon" onClick={handleCartClick} />
      ) : (
        <NavLink to="/store">
          <GiShoppingCart className="icon" onClick={handleCartClick} />
        </NavLink>
      )}
    </div>
  );
};

export default Icons;
