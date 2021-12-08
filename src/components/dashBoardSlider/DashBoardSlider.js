import React from "react";
import Slider from "react-slick";
import "./DashBoardSlider.scss";
import SliderImage from "./assets/slider.png";
import { useNavigate } from "react-router-dom";

export default function SimpleSlider() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/UsersSecurity');
    }

    var settings = {
        arrow: true,
        lazyLoad: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="">
            <Slider {...settings} className="product-slider">
                <div className="product-info">
                    <div className="product-img">
                        <figure>
                            <img src={SliderImage} alt="sliderImage" />
                        </figure>
                    </div>
                    <h5>Workflow</h5>
                    <p>5 WF</p>
                    <button className="action" onClick={handleNavigate}>
                        View
                    </button>
                </div>
                <div className="product-info">
                    <div className="product-img">
                        <figure>
                            <img src={SliderImage} alt="sliderImage" />
                        </figure>
                    </div>
                    <h5>Sop</h5>
                    <p>5 Sop</p>
                    <a href="#view" className="action">
                        View
                    </a>
                </div>
                <div className="product-info">
                    <div className="product-img">
                        <figure>
                            <img src={SliderImage} alt="sliderImage" />
                        </figure>
                    </div>
                    <h5>Sop Type</h5>
                    <p>5 spot</p>
                    <a href="#view" className="action">
                        View
                    </a>
                </div>
                <div className="product-info">
                    <div className="product-img">
                        <figure>
                            <img src={SliderImage} alt="sliderImage" />
                        </figure>
                    </div>
                    <h5>Security</h5>
                    <p>5 WF</p>
                    <a href="#view" className="action">
                        View
                    </a>
                </div>
            </Slider>
        </div>
    );
}
