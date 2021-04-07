import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
    return (
       <div className="header-wraper">
           <div className="main-info">
               <h1>Welcome to my portfolio</h1>
               <Typed
               className="typed-text"
               strings={["Web Design", "Web Development", "Graphic Design", "Google Analytics", "Social Media Marketing"]}
               typeSpeed={20}
               backSpeed={60}
               loop
               />
               <a href="#" className="btn-main-offer">Contact Me</a>
           </div>

       </div>
    )
}

export default Header;
