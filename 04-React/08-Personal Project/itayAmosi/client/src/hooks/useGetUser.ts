import axios from "axios";
import { useEffect, useState } from "react";

const useGetUser = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
          const { data } = await axios.get("/api/user/get-current-user");
          const {userDB} = data;
          setUser(userDB);
          setIsAdmin(userDB.ROLE === "admin")
          setIsLoading(false);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      }
    };

    getCurrentUser();
  }, []);

  return { user, error, isLoading, isAdmin };
};
export default useGetUser;
