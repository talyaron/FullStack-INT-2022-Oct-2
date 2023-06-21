import { Link } from "react-router-dom";
import "../style/admin.scss";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import useGetUser from "../hooks/useGetUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import useLoading from "../hooks/useLoading";

const Admin = () => {
const {isLoading} =useLoading();
  const { isAdmin, user } = useGetUser();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAdmin && user) {
      navigate("/");
    }
  }, [isAdmin, user]);

  return (
    <>
      <NavBar />
{isLoading ? <div className="loadigContainer "> ( <BallTriangle
  margin-left= "50"
  height="580"
  width="580"
  color="lightblue"
  ariaLabel="loading"
/>)</div>:
      <><aside>
          <header>
            <div className="profile" key="profile">
              <img className="profile-picture" src="../../public/me.jpg" alt="Profile" />
              <p>Itay Amosi</p>
            </div>
          </header>
          <nav className="side-navigation">
            <ul>
              <p className="active" key="home">
                <Link to={"/"}>
                  {" "}
                  <i className="fa fa-dashboard"></i>Home
                </Link>
              </p>
              <p key="projects">
                <Link to={"/"}>
                  {" "}
                  <i className="fa fa-dashboard"></i>Projects
                </Link>
              </p>
              <p key="comments">
                <Link to={"*"}>
                  {" "}
                  <i className="fa fa-dashboard"></i>Comments
                </Link>
              </p>
              <p key="users">
                <Link to={"*"}>
                  {" "}
                  <i className="fa fa-dashboard"></i>Users
                </Link>
              </p>
            </ul>
          </nav>
        </aside><Form /></>}
    </>
  );
};

export default Admin;