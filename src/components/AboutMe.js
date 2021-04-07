import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-6 col-xm-12">
                <img src=""{author} alt="ikra" />
            </div>
            <div className="col-lg-6 col-xm-12">
            <h1>About Me</h1>
            <p>This is me.</p>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;
