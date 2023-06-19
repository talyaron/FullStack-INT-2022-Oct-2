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

  const registerUser = (newUser: IUserInfo) => {
    axios.post("http://localhost:3000/user/add", newUser).then(() => {
      console.log(newUser)
      navigate(ACCOUNT_PATH);
    });
  };

  return (
    <div>
      <GenericForm
        fieldInfo={newUserInfo}
        setFieldInfo={setNewUserInfo}
        formFields={JOIN_FIELDS}
        buttonTitle="Join"
        buttonFunc={() => {
          registerUser(newUserInfo);
        }}
      />
    </div>
  );
};

export default Join;
