import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2>
          <span className="gray">My </span>
          <span className="purple"> Projects</span>
        </h2>
        <div className="row">
          <div className="col box">
            <span className="lightpurple wh">Veloit AI</span>
            <h4 className="desc">
              A No-code machine learning API which can be Integrated in our
              application for machine learning.
            </h4>
            <p className="more">
              The frontend works on flutter and Flask and Firebase for backend.
            </p>
          </div>
          <div className="col box">
            <span className="lightpurple b">Brain waves</span>
            <h4 className="desc wh">
              A method to interpret brain waves, with an aim to aid disabled
              people. Funded by Loyola Research Park.
            </h4>
            <p className="more">
              Non invasive ElectroEncephalogram is used with python for ML
              algorithms.
            </p>
          </div>
          <div className="col box">
            <span className="lightpurple">Pen-to-text</span>
            <h4 className="desc">
              A web-app for converting text in an image to digital text that can
              be copied using Pen to print Api.
            </h4>
            <p className="more">
              The frontend works on React Js and PentoPrint api for conversion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
