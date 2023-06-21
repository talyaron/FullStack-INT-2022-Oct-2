import React from 'react';
import { Link } from 'react-router-dom';
import './about.scss';
import useLoader from '../hooks/useLoder';
import { ThreeDots } from 'react-loader-spinner';

const About: React.FC = () => {
  const { isLoader } = useLoader();
  return (
    <div>
      {isLoader ? (
        <div className="loaderContainer">
          <ThreeDots
            height={80}
            width={80}
            color="green"
            ariaLabel="loading"
          />
        </div>
      ) : (
    <div className="aboutContainer">
      <h1 className="heading">Hi, I'm Itai Gelberg</h1>
      <p className="description">
        I am a Full Stack Developer passionate about creating web applications and building meaningful projects. This is my first portfolio site where I showcase my skills and projects.
      </p>
      <Link to="/" className="link">Go to Main Page</Link>
    </div>
    )}
    </div>
  );
};

export default About;