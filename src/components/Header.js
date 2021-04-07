import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
       <div className="header-wraper">
           <div className="main-info">
               <h1>Welcome to my portfolio</h1>
               <Typed
               className="typed-text"
               strings={["Web Design", "Web Development", "Graphic Design", "Google Analytics"]}
               typeSpeed={20}
               backSpeed={60}
               loop
               />
           </div>

       </div>
    )
}

export default Header;
