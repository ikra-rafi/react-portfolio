import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

function Services() {
    return (
        <div className="services">
            <h1 className="py-5">my services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faPaintBrush} size="2x"/>
                                </div>
                                <h3>Graphic Design</h3>
                                <p>I have the ability to create a full brand identity for you and your company with my design and coding techniques.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>Web Design</h3>
                                <p>With my design background, I approach each project individually and focus 
                                    on the result.</p>

                            </div>
                        </div>  
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>Web Development</h3>
                                <p>Your wish is my command. I can bring your concept to full fruition.</p>
                            </div>
                        </div>  
                        {/* - */}

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faGoogle} size="2x"/>
                                </div>
                                <h3>Google Analytics</h3>
                                <p>Using your website's metrics, we can drive more traffic to your site.</p>
                            </div>
                        </div>  
                        {/* - */}

                    </div>
                </div>
            </div>
    )
}

export default Services
