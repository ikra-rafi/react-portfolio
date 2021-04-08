import React from "react";
import emailjs from "emailjs-com";  

export const Contacts = () => {

const serviceID = "service_ID";
const templateID = "template_ID";
const userID = "user_Wj0xmwNiXLZtO8wmRMv2H";

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('serviceID', 'templateID', e.target, 'userID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div id="contacts" className="contacts">
        <div className="text-center">
           <h1>Contact me</h1> 
           <p>Have a project in mind? Fill out the form below to get started.</p>
        </div>
        <div className="container">
            <form onSumbit={sendEmail}>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    {/* Name Input */}
                    <div className="text-center">
 
                    <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    />
                    <div className="line"></div>
                    </div>
                    {/* Phone Input */}
                    <div className="text-center">
                    <input
                    id="phone"
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    />
                    <div className="line"></div>
                    </div>
                    {/* Email Input */}
                    <div className="text-center">
                    <input
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="Email"
                    />
                    <div className="line"></div>
                    </div>
                    {/* Subject Line Input */}
                    <div className="text-center">
                    <input
                    id="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    />                    
                </div>
                <div className="line"></div>
                </div>
                {/* col closing tag */}
                <div className="col-md-6 col-xs-12">
                    {/* Description */}
                    <div className="text-center">
                    <textarea
                    id="description"
                    type="text"
                    className="form-control"
                    placeholder="Please describe your project..."
                    name="description"
                    ></textarea>
                    <div className="line"></div>
                    </div>
                    <button className="button btn-main-offer contact-btn" type="submit">
                        Contact Me
                    </button>
                </div>
            </div>
            </form>
        </div>
        </div>
    )
}
export default Contacts;