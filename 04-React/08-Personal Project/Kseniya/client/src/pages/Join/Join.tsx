import { FC, useState } from "react";
import GenericForm from "../../Generics/GenericForm/GenericForm";
import { JOIN_FIELDS } from "../../consts/joinFields";
import { IUserInfo } from "../SignIn/ISignInInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_PATH } from "../../routes/routeData";

const Join: FC = () => {
  const [newUserInfo, setNewUserInfo] = useState<IUserInfo>({} as IUserInfo);

  const navigate = useNavigate();

  const handleFieldChange = (value: string, property: string) => {
    setNewUserInfo((prev) => {
      return { ...prev, [property]: value };
    });
  };

  const registerUser = () => {
    axios.post("http://localhost:3000/user/add", newUserInfo).then(() => {
      navigate(ACCOUNT_PATH);
    });
  };

  return (
    <div>
      <GenericForm
        changeFieldFunc={handleFieldChange}
        formFields={JOIN_FIELDS}
        buttonTitle="Join"
        buttonFunc={() => {
          registerUser();
        }}
      />
    </div>
  );
};

export default Join;
