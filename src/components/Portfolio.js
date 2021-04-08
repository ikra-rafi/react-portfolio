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
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

// Petocracy
const openPopupboxPetocracy = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {petocracy} alt="Petocracy App" />
    <p>Donate to animals in need or Volunteer for animals in need</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikra-rafi/group1_project2", "_blank")}
    >https://github.com/ikra-rafi/group1_project2</a>
    <br></br>
    <b>Deployed:</b> <a a className="hyper-link" onClick={() => window.open("https://immense-coast-50151.herokuapp.com", "_blank")}
    >https://immense-coast-50151.herokuapp.com</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Petocracy App"  }
      },
});
    
};

const popupboxConfigPetocracy = {
    titleBar: {
        enable: true,
        text: "Petocracy App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Foodtastic
const openPopupboxFoodtastic = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {foodastic} alt="Foodastic App" />
    <p>Foodtastic, a revolutionary search engine for foodies</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikra-rafi/group1_project2", "_blank")}
    >https://github.com/ikra-rafi/project1_group7</a>
    <br></br>
    <b>Deployed:</b> <a a className="hyper-link" onClick={() => window.open("https://ikra-rafi.github.io/project1_group7/", "_blank")}
    >https://ikra-rafi.github.io/project1_group7/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Foodastic App"  }
      },
});
    
};

const popupboxConfigFoodtastic = {
    titleBar: {
        enable: true,
        text: "Foodastic App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};


// Quiz
const openPopupboxQuiz = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {quiz} alt="State Capital App" />
    <p>Test your skills on the U.S. captials</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikra-rafi/quizHW4", "_blank")}
    >https://github.com/ikra-rafi/quizHW4</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://ikra-rafi.github.io/quizHW4/", "_blank")}
    >https://ikra-rafi.github.io/quizHW4/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Quiz App"  }
      },
});
    
};

const popupboxConfigQuiz = {
    titleBar: {
        enable: true,
        text: "Quiz App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Budget Tracker
const openPopupboxBudget = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {budget} alt="Budget Tracker App" />
    <p>Need to track your spending? Use this Budget Tracker</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikra-rafi/budget", "_blank")}
    >https://github.com/ikra-rafi/budget</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://secret-mountain-01555.herokuapp.com/", "_blank")}
    >https://secret-mountain-01555.herokuapp.com/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Budget Tracking App"  }
      },
});
    
};

const popupboxConfigBudget = {
    titleBar: {
        enable: true,
        text: "Budget Tracking App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Burger Logger App
const openPopupboxBurger = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {burger} alt="Burger Logger App" />
    <p>Like burgers? Log it!</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikra-rafi/burger-app", "_blank")}
    >https://github.com/ikra-rafi/burger-app</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://burger-10000.herokuapp.com/", "_blank")}
    >https://burger-10000.herokuapp.com/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Burger Logger App"  }
      },
});
    
};

const popupboxConfigBurger = {
    titleBar: {
        enable: true,
        text: "Burger Logger App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};


// Fitness Tracking App
const openPopupboxFitness = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {fitness} alt="Fitness Tracking App" />
    <p>Trying to keep track of your weekly fitness routine?</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikra-rafi/workout-tracker", "_blank")}
    >https://github.com/ikra-rafi/workout-tracker</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://arcane-caverns-33278.herokuapp.com/", "_blank")}
    >https://arcane-caverns-33278.herokuapp.com/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Fitness Tracking App"  }
      },
});
    
};

const popupboxConfigFitness = {
    titleBar: {
        enable: true,
        text: "Fitness Tracking App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Weather App
const openPopupboxWeather = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {weather} alt="Weather App" />
    <p>Know the weather before you go outside!</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ikra-rafi/weatherapp", "_blank")}
    >https://github.com/ikra-rafi/weatherapp</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://ikra-rafi.github.io/weatherapp/", "_blank")}
    >https://ikra-rafi.github.io/weatherapp/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Weather App"  }
      },
});
    
};

const popupboxConfigWeather = {
    titleBar: {
        enable: true,
        text: "Weather App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

}

    return (
        <div id="portfolio" className= "portfolio-wrapper">
            <div className= "container">
                <h1 className="text-uppercase text-center py">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPetocracy}>
                    <img className="portfolio-image" src={petocracy} alt="Petocracy App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxFoodtastic}>
                    <img className="portfolio-image" src={foodastic} alt="Foodastic App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxQuiz}>
                    <img className="portfolio-image" src={quiz} alt="State Capital Quiz App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
               
                {/* - */}
                
                <div className="portfolio-image-box" onClick={openPopupboxBudget}>
                    <img className="portfolio-image" src={budget} alt="Budget Tracking App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxBurger}>
                    <img className="portfolio-image" src={burger} alt="Burger Logger App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxFitness}>
                    <img className="portfolio-image" src={fitness} alt="Fitness Tracking App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxWeather}>
                    <img className="portfolio-image" src={weather} alt="Weather App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPetocracy} />
            <PopupboxContainer {...popupboxConfigBudget} />
            <PopupboxContainer {...popupboxConfigQuiz} />
            <PopupboxContainer {...popupboxConfigFoodtastic} />
            <PopupboxContainer {...popupboxConfigBurger} />
            <PopupboxContainer {...popupboxConfigFitness} />
            <PopupboxContainer {...popupboxConfigWeather} />
            </div>
    )
}

export default Portfolio;
