import React from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import WorkProject from "../components/WorkPageProjects/WorkProject";
import Footer from "../components/Footer/Footer";
const WorkPage = () => {
    return (
        <div>
            <ImageCarousel />
            <WorkProject />
            <Footer />
        </div>
    );
};

export default WorkPage;
