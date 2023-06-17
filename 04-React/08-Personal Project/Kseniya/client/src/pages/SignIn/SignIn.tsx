import { FC } from "react";
import { LOGIN_FIELDS } from "../../consts/loginFields";
import GenericForm from "../../Generics/GenericForm/GenericForm";
import { useNavigate } from "react-router-dom";
import { JOIN_PATH } from "../../routes/routeData";
import "./SignIn.css";

const SignIn: FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <GenericForm
        formFields={LOGIN_FIELDS}
        buttonTitle="Sign In"
        buttonFunc={() => {
          console.log("ok");
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
