//react
import { FC } from "react";

//icons
import FestiviteIcon from "../../assets/festiviteIcon.png";

//css
import "./Navbar.css";

//consts
import { NAVBAR_ELEMENTS } from "./Navbar.data";

// routing
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../routes/routeData";

const Navbar: FC = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("userType");

  const checkIsPrivate = (
    isPrivate: boolean,
    userType: string,
    path: string
  ) => {
    if (isPrivate && userType == "admin") {
      navigate(path);
    } else if (!isPrivate) {
      navigate(path);
    } else alert("You have no access to this part of the website!");
  };

  return (
    <div className="navbarContainer">
      <img
        className="mainIcon"
        src={FestiviteIcon}
        alt="Festivite Icon"
        onClick={() => {
          navigate(HOME_PATH);
        }}
      />
      <div className="navbarElements">
        {NAVBAR_ELEMENTS.map((element, index) => (
          <div
            className="singleElement"
            key={index}
            onClick={() => {
              checkIsPrivate(element.isPrivate, user!, element.path);
            }}
          >
            {element.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
