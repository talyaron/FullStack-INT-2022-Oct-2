//React
import { FC, useEffect, useState } from "react";

//Mui
import { Button, Card, CardContent } from "@mui/material";

//navigation
import { useNavigate } from "react-router-dom";
import { HOME_PATH, SIGNIN_PATH } from "../../routes/routeData";

// css
import './Account.css'

//context
import { useUserInfoContext } from "../../context/userContext";
import { IUserInfo } from "../SignIn/ISignInInfo";

const Account: FC = () => {
  const { userInfo } = useUserInfoContext();

  const [emptyUser, setEmptyUser] = useState<IUserInfo>({} as IUserInfo)

  const navigate = useNavigate();

  useEffect(() => {
    // const codedId = localStorage.getItem("token");

    // if (codedId) {
    //   setUser(userInfo);
    // } else {
    //   navigate(SIGNIN_PATH);
    // }

    localStorage.setItem("userType", userInfo.userType);
  }, []);

  const logOut = () => {
    localStorage.clear();
    setEmptyUser({} as IUserInfo)
    navigate(HOME_PATH);
  };

  return (
    <div className="accountContainer">
      <div className="elementsContainer">
        <div className="welcome">Hi! Welcome back!</div>
        <Card id='cardContainer' sx={{ minWidth: 400 }}>
          <CardContent id="cardContent" sx={{ minHeight: 200 }}>
          <div id="userName">{userInfo.fullName}</div>
            <div id="userInfo">{userInfo.email}</div>
            <div >{userInfo.phoneNumber}</div>
          </CardContent>
        </Card>
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
    </div>
  );
};

export default Account;
