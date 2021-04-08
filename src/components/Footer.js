import React from 'react';
import {Link} from "react-scroll";
import { EmailIcon, EmailShareButton, LinkedinShareButton, LinkedinIcon } from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Washington, D.C.</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-5555">703-835-5555</a>
                        </div>
                        <div className="d-flex">
                            <p>iar296@gmail.com</p>
                        </div>
                    </div>
                    <div className=" col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                    <div className="col">
                        <Link smooth={true} to="home" offset={-110} className="footer-nav">Home</Link>
                        <br />
                        <Link smooth={true} to="about" offset={-110} className="footer-nav">About Me</Link>
                        <br />
                        <Link smooth={true} to="services" offset={-110} className="footer-nav">Services</Link>
                    </div>
                    <div className="col">
                        <Link smooth={true} to="resume" offset={-110} className="footer-nav">Resume</Link>
                        <br />
                        <Link smooth={true} to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                        <br />
                        <Link smooth={true} to="contacts" offset={-110} className="footer-nav">Contact</Link>
                    </div>

                    </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <LinkedinShareButton 
                        url={"https://www.linkedin.com/in/ikra-rafi-a4ab9279/"}
                        quote={"FullStack Developer"}
                        hashtag="#javascript"
                        >
                            <LinkedinIcon className="mx-3" size={36}/>
                        </LinkedinShareButton>
                        <EmailShareButton 
                        url={"https://www.linkedin.com/in/ikra-rafi-a4ab9279/"}
                        >         
                            <EmailIcon className="mx-3" size={36}/>
                        </EmailShareButton>

                    </div>
                    <p className="p-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp;Ikra Rafi | All Rights Reserved
                    </p>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
