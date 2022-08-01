import React from "react";
import "./project-banner.scss";
import bg from "../../statics/controller.jpeg";
import bg1 from "../../statics/controller1.jpg";
import bg2 from "../../statics/controller2.webp";
const ProjectBanner = () => {
    return (
        <div className="project-banner-container">
            <div className="project-banner-bg">
                <img src={bg} className="project-banner-bg" />
            </div>
            <div>
                <img src={bg} className="project-banner-bg" />
            </div>
            <div>
                <img src={bg} className="project-banner-bg" />
            </div>
        </div>
    );
};

export default ProjectBanner;
