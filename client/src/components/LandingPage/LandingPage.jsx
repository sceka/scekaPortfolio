import React, { useRef } from "react";
import "./landing-page.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../statics/controller.jpeg";
import logo1 from "../../statics/controller1.jpg";
import logo2 from "../../statics/controller2.webp";
import logo3 from "../../statics/controller3.jpg";
import logo4 from "../../statics/controller4.jpeg";
import "swiper/css";

const LandingPage = () => {
    SwiperCore.use([Autoplay]);

    const items = [
        {
            id: 1,
            src: logo,
        },
        { id: 2, src: logo1 },
        { id: 3, src: logo2 },
        { id: 4, src: logo3 },
        { id: 5, src: logo4 },
    ];

    return (
        <div className="landing-page-container">
            <div className="grid1">
                <div className="job-title">Front-end Developer</div>
                <h1>Design Studio Creating Fabulous</h1>
            </div>
            <div className="grid2-container">
                <div>
                    <Swiper
                        slidesPerView={1}
                        modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={0}
                    >
                        <SwiperSlide>
                            <SwiperSlide>
                                <img src={logo} alt="src" className="logo1" />
                            </SwiperSlide>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
