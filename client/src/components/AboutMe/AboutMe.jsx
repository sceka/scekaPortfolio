import React from "react";
import "./about-me.scss";
const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me-text">
                I am a software engineer with a diverse and in-depth skillset.
                I've been working in the development field for 2 years.
            </div>
            <div className="about-me-container-1">
                <div className="about-me-item-container">
                    <div className="about-me-item">Node.js</div>
                    <div className="about-me-item">React.js</div>
                    <div className="about-me-item">Vue.js</div>
                    <div className="about-me-item">HTML</div>
                </div>
                <div className="about-me-item-container1 about-item">
                    <div className="about-me-item1">CSS</div>
                    <div className="about-me-item1">Javascript</div>
                    <div className="about-me-item1">Typescript</div>
                    <div className="about-me-item1">Web3</div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
