import React from "react";
import "./Header.scss";
const Header = () => {
    return (
        <div className="header-container" style={{ position: "relative" }}>
            <div className="header-container-wrapper">
                <div className="logo">Marko</div>
                <div className="header-select-bar">
                    <a href="/pages" className="pages">
                        Pages
                    </a>
                    <a href="/work" className="work">
                        Work
                    </a>
                    <a href="/services" className="services">
                        Services
                    </a>
                    <a href="/contact" className="contact">
                        Contact
                    </a>
                    <a>Hello</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
