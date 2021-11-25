import React from "react";
import Slider from "react-slick";
import "./DashBoard.scss";
import SliderImage from "./assets/slider.png";

export default function SimpleSlider() {
    var settings = {
        arrow: false,
        lazyLoad: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
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
        <div className="container">
            <Slider {...settings} className="product-slider">
                <div className="product-info">
                    <div className="product-img">
                        <figure>
                            <img src={SliderImage} alt="sliderImage" />
                        </figure>
                    </div>
                    <h3>1</h3>
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
                    <h3>1</h3>
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
                    <h3>1</h3>
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
                    <h3>1</h3>
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
                    <h3>1</h3>
                    <a href="#view" className="action">
                        View
                    </a>
                </div>
            </Slider>
        </div>
    );
}
