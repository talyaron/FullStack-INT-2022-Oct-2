import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUserInfo } from "../SignIn/ISignInInfo";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../routes/routeData";
import "./Account.css";

const Account: FC = () => {
  const [user, setUser] = useState<IUserInfo>({} as IUserInfo);

  const navigate = useNavigate();
  useEffect(() => {
    const codedId = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${codedId}`;
    if (codedId) {
      axios
        .get<IUserInfo>("http://localhost:3000/user/get")
        .then(({ data }) => {
          setUser(data);
        });
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate(HOME_PATH);
  };

  localStorage.setItem("userType", user.userType);

  return (
    <div className="accountContainer">
      <div className="userName">{user.fullName}</div>
      <div className="userInfo">
        <div>{user.email}</div>
        <div>{user.phoneNumber}</div>
      </div>
      <Button
        className="log"
        variant="contained"
        onClick={() => {
          logOut();
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default Account;
