import React from 'react'

const NavBar = () => {

    function checkLoggedInStore() {
        console.log("Check logged in")
      }
      
  return (
    <div className="navBar">
        <div className="navBar_container">
            <div className="navBar_logo">
                <img id="logo" src="./src/assets/images/logo.png" />
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
                <div className="logoutLoginDiv">
                    <div className="accountIcon">
                        <span className="icon material-symbols-outlined">account_circle</span>
                        <div className="profileDetails">
                            <p className="username" id="username"></p>
                            <a className="link" id="loginLogoutBtn"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar