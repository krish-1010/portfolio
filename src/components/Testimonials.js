import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alp from "./imgs/alp.png";
import loyola from "./imgs/loyolaLogo.png";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div />,
    prevArrow: <div />,
  };
  return (
    <div className="Testimonials">
      <div className="container">
        <Slider {...settings}>
          <div className="testimonial one">
            <img src={alp} alt="logo" />
            <h3>Alpha Matriculation Higher secondary school</h3>
            <h4>school</h4>
            <h4>2009-2019</h4>
            <p className="quote">Seek share serve</p>
          </div>

          <div className="testimonial two">
            <img src={loyola} alt="logo" />
            <h3>Loyola college</h3>
            <h4>college</h4>
            <h4>2020-present</h4>
            <p className="quote">"Let Your Light Shine"</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
