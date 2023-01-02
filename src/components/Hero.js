import React from "react";
import "./Hero.css";
import { Link, Button } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="content">
        <p>
          <span className="purple">Krishna</span> M
        </p>
        <p>Self motivated, Enthusiastic, Passionate</p>
        {/* <p></p> */}
        <button href="/" className="button">
          <Link to="about" spy={true} smooth={true} offset={-90}>
            More about me
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
