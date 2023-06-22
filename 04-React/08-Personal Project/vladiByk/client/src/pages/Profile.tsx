import "../styles/Profile.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHook";
import { selectUser, logout } from "../app/userSlice";

const Profile = () => {
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    dispatch(logout());

    await axios.delete("api/v1/users/clearUserCookie");

    navigate("/");
  };

  const content = (
    <div className="userDetails">
      <p>User Name: {user?.userName}</p>
    </div>
  );

  return (
    <div className="profilePage">
      {user ? content : <p>no user found</p>}
      <button className="button-6">View order history</button>
      <button onClick={handleLogOut} className="button-6">
        Log Out
      </button>
    </div>
  );
};

export default Profile;
