import React from "react";
import AboutLandingPage from "../components/AboutLandingPage/AboutLandingPage";
import AboutMe from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import ProjectBanner from "../components/ProjectBanner/ProjectBanner";

const About = () => {
    return (
        <div>
            <Header />
            <AboutLandingPage />
            <AboutMe />
            <ProjectBanner />
        </div>
    );
};

export default About;
