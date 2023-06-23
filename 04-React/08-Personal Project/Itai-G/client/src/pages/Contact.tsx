import React from "react";
import { Link } from "react-router-dom";
import "./contact.scss";
import useLoader from "../hooks/useLoder";
import { ThreeDots } from "react-loader-spinner";

const Contact: React.FC = () => {
  const { isLoader } = useLoader();
  return (
    <div>
      {isLoader ? (
        <div className="loaderContainer">
          <ThreeDots height={80} width={80} color="green" ariaLabel="loading" />
        </div>
      ) : (
        <div className="contactContainer">
          <h2>My Contact Info</h2>
          <p>Email: gelberg4322@gmail.com</p>
          <p>Phone Number: +972544803423</p>
          <Link to="/">Go to main page</Link>
        </div>
      )}
    </div>
  );
};

export default Contact;
