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
//  React POP UP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";


const Portfolio = () => {

// Petocracy
const openPopupboxPetocracy = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {petocracy} alt="Petocracy App" />
    <p>Description</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikra-rafi/group1_project2")}
    >https://github.com/ikra-rafi/group1_project2</a>
    </>
)
    PopupboxManager.open({content})
}

const popupboxConfigPetrocracy ={

}

    return (
        <div className= "portfolio-wrapper">
            <div className= "container">
                <h1 className="text-uppercase text-center py">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPetocracy}>
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
            <PopupboxContainer {...popupboxConfigPetrocracy} />
            </div>
    )
}

export default Portfolio;
