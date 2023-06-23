import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUserInfo } from "../SignIn/ISignInInfo";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HOME_PATH, SIGNIN_PATH } from "../../routes/routeData";
import "./Account.css";
import { useUserInfoContext } from "../../context/userContext";

const Account: FC = () => {
  const [user, setUser] = useState<IUserInfo>({} as IUserInfo);

  const { userInfo } = useUserInfoContext();

  const navigate = useNavigate();

  useEffect(() => {
    const codedId = localStorage.getItem("token");

    if (codedId) {
      setUser(userInfo);
      console.log(userInfo);
    } else {
      navigate(SIGNIN_PATH);
    }

    localStorage.setItem("userType", userInfo.userType);
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate(HOME_PATH);
  };

  return (
    <div className="accountContainer">
      <div>Hi! Welcome back!</div>
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
