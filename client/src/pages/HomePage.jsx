import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LandingPage from "../components/LandingPage/LandingPage";
import Projects from "../components/Projects/Projects";
const HomePage = () => {
    return (
        <div>
            <Header />
            <LandingPage />
            <Projects />
            <Footer />
        </div>
    );
};

export default HomePage;
