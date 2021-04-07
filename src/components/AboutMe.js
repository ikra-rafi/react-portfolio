import React from "react";
import author from "../me.png";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-4">
                <img src={author} alt="ikra" className="profile-img" />
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About Me</h1>
            <p><strong>Hello! Nice to meet you, I'm Ikra. 
            </strong></p>
                <p>
                I always had a passion for art and design and graduated from 
                George Mason University with a Bachelor of Fine Arts in Arts and Visual Technology in 2017.
                I currently work as a Creative Service Coordinator at a nonprofit, National Low Income Housing Coalition, in Washington D.C.
                The main functions of my responsibilities are cms, print and interactive graphics. Ever since the pandemic, I wanted to explore
                more options for creativity and found myself enrolling at a certificate program at George Washington University for Full Stack Development. 
                </p>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;
