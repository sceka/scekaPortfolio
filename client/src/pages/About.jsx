import React from "react";
import AboutLandingPage from "../components/AboutLandingPage/AboutLandingPage";
import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";

const About = () => {
    return (
        <div>
            <Header />
            <AboutLandingPage />
            <AboutMe />
        </div>
    );
};

export default About;
