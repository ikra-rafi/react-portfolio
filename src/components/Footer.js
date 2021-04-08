import React from 'react';
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
                        <a className="footer-nav">Home</a>
                        <br />
                        <a className="footer-nav">About Me</a>
                        <br />
                        <a className="footer-nav">Services</a>
                    </div>
                    <div className="col">
                        <a className="footer-nav">Resume</a>
                        <br />
                        <a className="footer-nav">Portfolio</a>
                        <br />
                        <a className="footer-nav">Contact</a>
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
