import { createContext, useContext, useState, FC, useEffect } from "react";
import axios from "axios";

import { IUserInfo } from "../pages/SignIn/ISignInInfo";

interface IUserContext {
  userInfo: IUserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}

const UserInfoContext = createContext<IUserContext>({} as IUserContext);

export const useUserInfoContext = () => useContext(UserInfoContext);

export const UserInfoProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (token) {
      axios
        .get<IUserInfo>("http://localhost:3000/user/get")
        .then(({ data }) => {
          setUserInfo(data);
        });
    }
  
  }, [token]);

  const value: IUserContext = {
    userInfo,
    setUserInfo,
  };

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};
