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
            <span className="lightpurple wh">AR Product Preview</span>
            <h4 className="desc">
              Android app using AR technology to preview 3D models in real-time
              by downloading them using FTP
            </h4>
            <p className="more">
              Unity Engine for development, C# for scripting, Gradle for builds.
            </p>
          </div>
          <div className="col box">
            <span className="lightpurple b">Nexus Webfolio</span>
            <h4 className="desc wh">
              A dynamic, space-themed web-folio for Anna University, with an AI
              chatbot to assist HRs.
            </h4>
            <p className="more">
              Next.js with GSAP for animations, AI chatbot with custom training,
              Cloudinary CDN for image optimization.
            </p>
          </div>
          <div className="col box">
            <span className="lightpurple">Space Board Game</span>
            <h4 className="desc">
              A space-themed board game with dynamic animations and advanced
              layouts for interactive gameplay.
            </h4>
            <p className="more">
              Next.js for frontend and backend, PostgreSQL via Docker, GSAP and
              Framer for animations.
            </p>
          </div>
        </div>

        {/*  */}
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
              A web app that converts text from an image into editable digital
              text using OCR technology.
            </h4>
            <p className="more">
              The frontend works on React Js and PentoPrint api for Text
              Recognition.
            </p>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
