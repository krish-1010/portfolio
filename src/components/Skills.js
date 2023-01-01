import React from "react";
import "./Skills.css";
import htmlicon from "./imgs/html.png";
import css from "./imgs/css-3.png";
import javascript from "./imgs/js.png";
import java from "./imgs/java.png";
import python from "./imgs/python.png";
import node from "./imgs/nodejs.png";
import git from "./imgs/git.png";
import boot from "./imgs/bootstrap.png";
import react from "./imgs/atom.png";
import mysql from "./imgs/mysql.png";
import vsc from "./imgs/vsc.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h2>
          <span className="gray">My </span>
          <span className="purple"> Skills</span>
        </h2>
        <div className="content">
          <a href="#" className="skills-1">
            <div className="skill">
              <div className="img-elem">
                <img src={python} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">Python</div>
            </div>
          </a>
          <a href="#" className="skills-2">
            <div className="skill">
              <div className="img-elem">
                <img src={java} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">Java</div>
            </div>
          </a>
          <a href="#" className="skills-3">
            <div className="skill">
              <div className="img-elem">
                <img src={htmlicon} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">HTML</div>
            </div>
          </a>
          <a href="#" className="skills-4">
            <div className="skill">
              <div className="img-elem">
                <img src={css} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">CSS</div>
            </div>
          </a>
          <a href="#" className="skills-5">
            <div className="skill">
              <div className="img-elem">
                <img src={javascript} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">Javascript</div>
            </div>
          </a>
          <a href="#" className="skills-1">
            <div className="skill">
              <div className="img-elem">
                <img src={react} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">React Js</div>
            </div>
          </a>
          <a href="#" className="skills-2">
            <div className="skill">
              <div className="img-elem">
                <img src={boot} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">BootStrap</div>
            </div>
          </a>
          <a href="#" className="skills-3">
            <div className="skill">
              <div className="img-elem">
                <img src={node} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">Node js</div>
            </div>
          </a>
          <a href="#" className="skills-4">
            <div className="skill">
              <div className="img-elem">
                <img src={vsc} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">Vs code</div>
            </div>
          </a>
          <a href="#" className="skills-5">
            <div className="skill">
              <div className="img-elem">
                <img src={git} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">Git</div>
            </div>
          </a>
          <a href="#" className="skills-5">
            <div className="skill">
              <div className="img-elem">
                <img src={mysql} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">My SQL</div>
            </div>
          </a>
          <a href="#" className="skills-5">
            <div className="skill">
              <div className="img-elem">
                <img src={react} alt="skill logo" className="skill-icon" />
              </div>
              <div className="text-elem">React Native</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
