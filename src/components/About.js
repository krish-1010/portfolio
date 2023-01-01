import React from "react";
import "./About.css";
import Hello from "./imgs/hello.png";
import { BsCheck2All } from "react-icons/bs";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <img src={Hello} alt="hello" />
        <div className="col-2">
          <h2>
            <span className="gray">About </span>
            <span className="purple"> Me</span>
          </h2>
          <p>Passionate person who believes in universe</p>
          <ul>
            <li>
              <BsCheck2All
                className="double-tick"
                fill="#b161e7"
                size="1.2em"
              />
              I am a Self taught programmer, intrestred in various technologies,
              currently pursuing B.Sc. Physics.
            </li>
            <li>
              <BsCheck2All
                className="double-tick"
                fill="#b161e7"
                size="1.2em"
              />
              Freelance Teacher - Programming
            </li>
            <li>
              <BsCheck2All
                className="double-tick"
                fill="#b161e7"
                size="1.2em"
              />
              Gaming Enthusiast
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
