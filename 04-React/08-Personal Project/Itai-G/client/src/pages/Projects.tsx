import './projects.scss'
import Navbar from '../components/navbar/Navbar';
import ProjectComp from '../components/ProjectComp/ProjectComp';
import { ThreeDots } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import useLoader from '../hooks/useLoder';

const Projects = () => {
  const { isLoader } = useLoader();

  return (
    <>
      
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
        <><Navbar />
            <div className='projectCards'>
            <ProjectComp _id={0} name={''} img={''} description={''} />
            <Outlet />
          </div></>
      )}
    </>
  );
};

export default Projects;