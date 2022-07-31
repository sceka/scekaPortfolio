import React, { useEffect, useState } from "react";
import "./work-projects.scss";
import logo from "../../statics/nice.png";
const WorkProject = () => {
    const jobs = [
        {
            title: "Wiv",
            type: "Branding",
            development: "Webflow Development",
            jobsClass: "one",
        },
        {
            title: "Wiv",
            type: "Branding",
            development: "Webflow Development",
            jobsClass: "two",
        },
        {
            title: "Wiv",
            type: "Branding",
            development: "Webflow Development",
            jobsClass: "three",
        },
        {
            title: "Wiv",
            type: "Branding",
            development: "Webflow Development",
            jobsClass: "four",
        },
        {
            title: "Wiv",
            type: "Branding",
            development: "Webflow Development",
            jobsClass: "five",
        },
        {
            title: "Wiv",
            type: "Branding",
            development: "Webflow Development",
            jobsClass: "six",
        },
    ];

    // const [link, setLink] = useState([]);
    useEffect(() => {
        let links = document.querySelectorAll(".project-card");
        let linkImages = document.querySelectorAll(".hover-reveal__img");

        links.forEach((link, idx) => {
            link.addEventListener("mousemove", (e) => {
                link.children[1].style.opacity = 1;
                link.children[0].style.zIndex = 3;
                link.children[1].style.transform = `translate(${
                    e.clientX - 900
                }px, ${e.clientY / 15}px) `;
                linkImages[idx].style.transform = "scale(1,1)";
            });
            link.addEventListener("mouseleave", (e) => {
                link.children[1].style.opacity = 0;
            });
        });
    }, []);

    return (
        <div className="work-project-container">
            {jobs.map((item, i) => (
                <div className="project-card">
                    <div className="project-card-desc">
                        <div className="project-card-desc-title">
                            {item.title}
                        </div>
                        <div className="project-card-small-desc">
                            <div>{item.type}</div>
                            <div>{item.development}</div>
                        </div>
                    </div>
                    <div className="hover-reveal">
                        <div className="hover-reveal__inner">
                            <div
                                className={`hover-reveal__img ${item.jobsClass}`}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <img src={logo} className="arrow-right" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkProject;
