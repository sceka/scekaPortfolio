import React from "react";
import "./footer.scss";
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="ready-container">
                <div className="ready-text">Ready to Create together?</div>
                <button className="ready-button">Get in touch</button>
            </div>
            <div className="marquee">
                <h3>
                    <div className="marquee-wrapper">
                        <div className="marquee-title">
                            Webflow Expert <span>Visual Designer</span> Get
                            in&nbsp;
                            <span>touch</span>&nbsp; Webflow Expert{" "}
                            <span>Visual Designer</span> Get in&nbsp;
                            <span>touch</span>
                        </div>
                        <div className="marquee-title">
                            Webflow Expert <span>Visual Designer</span>&nbsp;Get
                            in&nbsp;
                            <span>touch</span>&nbsp; Webflow Expert{" "}
                            <span>Visual Designer</span> Get in&nbsp;
                            <span>touch</span>
                        </div>
                        <div className="marquee-title">
                            Webflow Expert <span>Visual Designer</span>&nbsp;Get
                            in&nbsp;
                            <span>touch</span>&nbsp; Webflow Expert{" "}
                            <span>Visual Designer</span> Get in&nbsp;
                            <span>touch</span>
                        </div>
                    </div>
                </h3>
            </div>
            <div className="last-footer">
                <button>Work</button>
                <button>Services</button>
                <button>About</button>
            </div>
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
                @ Marko Scekic
            </div> */}
        </div>
    );
};

export default Footer;
