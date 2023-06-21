import { useEffect, useState } from "react";
import "../styles/Profile.scss";
import axios from "axios";
import { UserType } from "../App";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState<UserType | null>(null);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    await axios.delete("api/v1/users/clearUserCookie");

    navigate("/");
  };

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("api/v1/users/getUser");

      const user = await data.user;

      setUser((prev) => (prev = user));
    };

    fetch();
  }, []);

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
