import { useEffect, useState } from "react";

const useLoader = () => {
  const [error] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
  const handleLoader = () => {
    setIsLoader(true);
  
      setTimeout(() => {
        setIsLoader(false);
      }, 1500);
    };
    handleLoader();
}, []);

  return { error, isLoader };
};
export default useLoader;
