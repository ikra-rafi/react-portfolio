import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import {Link} from "react-scroll";

const Header = () => {
    return (
       <div id="home" className="header-wraper">
           <div className="main-info">
               <h1>Welcome to my portfolio</h1>
               <Typed
               className="typed-text"
               strings={["Web Design", "Web Development", "Graphic Design", "Google Analytics", "Social Media Marketing"]}
               typeSpeed={20}
               backSpeed={60}
               loop
               />
               <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">Contact Me</Link>
           </div>

       </div>
    )
}

export default Header;
