import React from "react";
import "./projects.scss";
import logo from "../../statics/controller.jpeg";
import arrow from "../../statics/nice.png";
const Projects = () => {
    return (
        <div className="projects-container">
            <div className="project-wrapper">
                <img src={logo} className="project-picture" />
                <button className="project-button">
                    <div className="button-text">
                        <div className="button-text-title">Project name</div>
                        <div className="project-desc">
                            <div>Brending</div>
                            <div>Webflow development</div>
                        </div>
                    </div>
                    <div>
                        <img src={arrow} className="arrow-container" />
                    </div>
                </button>
            </div>
            <div className="project-wrapper">
                <img src={logo} className="project-picture" />
                <button className="project-button">
                    <div className="button-text">
                        <div className="button-text-title">Project name</div>
                        <div className="project-desc">
                            <div>Brending</div>
                            <div>Webflow development</div>
                        </div>
                    </div>
                    <div>
                        <img src={arrow} className="arrow-container" />
                    </div>
                </button>
            </div>
            <div className="project-wrapper">
                <img src={logo} className="project-picture" />
                <button className="project-button">
                    <div className="button-text">
                        <div className="button-text-title">Project name</div>
                        <div className="project-desc">
                            <div>Brending</div>
                            <div>Webflow development</div>
                        </div>
                    </div>
                    <div>
                        <img src={arrow} className="arrow-container" />
                    </div>
                </button>
            </div>
            <div className="project-wrapper">
                <img src={logo} className="project-picture" />
                <button className="project-button">
                    <div className="button-text">
                        <div className="button-text-title">Project name</div>
                        <div className="project-desc">
                            <div>Brending</div>
                            <div>Webflow development</div>
                        </div>
                    </div>
                    <div>
                        <img src={arrow} className="arrow-container" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Projects;
