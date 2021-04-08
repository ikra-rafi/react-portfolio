import React from "react";
import logo from "../ikra_Logo.png";
import {Link} from "react-scroll";
// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    .
    <div class="container">
        
    
    
  <a className="navbar-brand" href="#"><img className="logo" src ={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#cc2c6f"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Services</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="resume" offset={-110} className="nav-link" href="#">Resume</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contact</Link>
      </li>
  
    </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;