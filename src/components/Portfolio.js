import React from "react";
import budget from "../images/Budget-Table.png";
import burger from "../images/burgerapp.png";
import fitness from "../images/fitness-2.png";
import foodastic from "../images/foodastic.png";
import petocracy from "../images/petocracy.png";
import weather from "../images/weather-app.png";
import quiz from "../images/wrongquiz.png";
// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
    return (
        <div className= "portfolio-wrapper">
            <div className= "container">
                <h1 className="text-uppercase text-center py">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                    <img className="portfolio-image" src={petocracy} alt="Petocracy App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={foodastic} alt="Foodastic App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={quiz} alt="State Capital Quiz App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
               
                {/* - */}
                
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={budget} alt="Budget Tracking App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={burger} alt="Burger Logger App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={fitness} alt="Fitness Tracking App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={weather} alt="Weather App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                </div>
            </div>
            </div>
    )
}

export default Portfolio;
