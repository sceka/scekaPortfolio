import React from "react";
import "./Header.scss";
import burger from "../../statics/burger.png";
const Header = () => {
    return (
        <div className="header-container">
            <div className="header-container-wrapper">
                <div className="logo">Marko</div>
                <div className="header-select-bar">
                    <a href="/work" className="work">
                        Work
                    </a>
                    <a href="/services" className="services">
                        Services
                    </a>
                    <a href="/about" className="contact">
                        About
                    </a>
                    <a href="/contact" className="contact">
                        Contact
                    </a>
                    <img src={burger} className="burger" />
                </div>
            </div>
        </div>
    );
};

export default Header;
