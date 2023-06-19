import { FC, useState } from "react";
import { LOGIN_FIELDS } from "../../consts/loginFields";
import GenericForm from "../../Generics/GenericForm/GenericForm";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_PATH, JOIN_PATH } from "../../routes/routeData";
import "./SignIn.css";
import { IUserInfo } from "./ISignInInfo";
import axios from "axios";

const SignIn: FC = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);

  const navigate = useNavigate();

  const signInUser = (user: IUserInfo) => {
    axios.post("http://localhost:3000/user/login", user).then(({ data }) => {
      const { token } = data;
      console.log(token)
      localStorage.setItem("token", token);
      navigate(ACCOUNT_PATH);
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <GenericForm
        fieldInfo={userInfo}
        setFieldInfo={setUserInfo}
        formFields={LOGIN_FIELDS}
        buttonTitle="Sign In"
        buttonFunc={() => {
          signInUser(userInfo);
        }}
      />
      <div
        className="joinLink"
        onClick={() => {
          navigate(JOIN_PATH);
        }}
      >
        Not friends yet? Join now
      </div>
    </div>
  );
};

export default SignIn;
