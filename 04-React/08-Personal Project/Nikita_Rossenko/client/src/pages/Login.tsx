import { checkLoggedInStore, handleLogin } from "../helpers/helpers"

const Login = () => {

  
  return (
    <>
    <div className="navBar">
        <div className="navBar_container">
            <div className="navBar_logo">
                <img id="logo" src="./images/logo.png" />
            </div>
            <div className="navBar_links">
                <div className="links">
                    <a className="link" href="/">Home</a>
                    <a
                        className="link"
                        onClick={checkLoggedInStore}
                        >Starship Store</a
                    >
                    <a className="link" href="/">Environment</a>
                    <a className="link" href="/">Contact</a>
                </div>
            </div>
        </div>
    </div>
    <div className="videoContainer">
        <div className="sentensesContainer">
            <h1 className="sentensesSlide w3-animate-fading">
                Welcome to the mission to Mars! We're thrilled to have you on board and can't wait to explore the Red Planet together.
            </h1>
            <h1 className="sentensesSlide w3-animate-fading">
                We are thrilled to welcome you to the Mars mission, an exciting and groundbreaking journey that will take us to the forefront of space exploration.
            </h1>
            <h1 className="sentensesSlide w3-animate-fading">
                As part of this team, you will play a crucial role in advancing our understanding of the universe and paving the way for future generations of space explorers.
            </h1>
            <h1 className="sentensesSlide w3-animate-fading">
                Together, we will face incredible challenges and push the boundaries of what is possible, all in the pursuit of scientific discovery and the betterment of humankind. So let's buckle up, hold on tight, and get ready to make history!
            </h1>
        </div>
        <div className="darken"></div>
        <video src="../media/videos/mars-10217.mp4" autoPlay loop muted></video>
    </div>
    <div className="login_register_container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input className="input" required type="text" name="username" placeholder="Username"></input>
            <input className="input" required type="password" name="password" placeholder="Password"></input>
            <input type="submit" value="Login"></input>

        </form>
        <a href="/register.html">Don't have a user? Register</a>
    </div>
    </>
  )
}

export default Login