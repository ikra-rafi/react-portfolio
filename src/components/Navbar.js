import React from "react";
import logo from "../ikra_Logo.png";
// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    .
    <div class="container">
        
    
    
  <a className="navbar-brand" href="#"><img className="logo" src ={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fdc214"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
  
    </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;