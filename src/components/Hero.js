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

        <Link to="about" spy={true} smooth={true} offset={-90}>
          <button href="/" className="button">
            More about me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
