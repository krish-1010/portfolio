import React from "react";
import "./Hero.css";

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
          More about me
        </button>
      </div>
    </div>
  );
};

export default Hero;
