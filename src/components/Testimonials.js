import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alp from "./imgs/alp.png";
import loyola from "./imgs/loyolaLogo.png";
import unom from "./imgs/unom.png";
import "./Testimonials.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="Testimonials">
      <div className="container">
        <Slider {...settings}>
          <div className="testimonial one">
            <img src={alp} alt="alplha logo" />
            <h3 className="title">
              Alpha Matriculation Higher secondary school
            </h3>
            <h4 className="title-2">School</h4>
            <h4 className="year">2009-2019</h4>
            <p className="quote">Seek share serve</p>
          </div>

          <div className="testimonial two">
            <img src={loyola} alt="loyola logo" />
            <h3 className="title">Loyola college</h3>
            <h4 className="title-2">UG - College</h4>
            <h4 className="year">2020 - 2023</h4>
            <p className="quote">"Let Your Light Shine"</p>
          </div>

          <div className="testimonial three">
            <img src={unom} alt="unom logo" />
            <h3 className="title">University of Madras</h3>
            <h4 className="title-2">PG - University</h4>
            <h4 className="year">2023 - 2025</h4>
            <p className="quote">"Doctrina Vim Promovet Insitam"</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
