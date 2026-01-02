import React from "react";
import "./About.css";
import Hello from "./imgs/hello.png";
import { BsCheck2All } from "react-icons/bs";

const About = () => {
  return (
    <div className="about" id="about">
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
              <b>Software Developer</b> - Java and Next.js developer with
              expertise in web development and a strong foundation in computer
              applications.
            </li>
            <li>
              <BsCheck2All
                className="double-tick"
                fill="#b161e7"
                size="1.2em"
              />
              <b>Technical Leader</b> - Frequently taking up roles such as
              Technical Head, driving impactful projects and mentoring others.
            </li>
            <li>
              <BsCheck2All
                className="double-tick"
                fill="#b161e7"
                size="1.2em"
              />
              <b>Freelance Educator</b> - Actively involved in educational
              discussions, inspiring learners in programming and technology.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
