// import { React, useState } from "react";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projects = [
  {
    title: "AR Product Preview",
    spanClass: "lightpurple wh",
    desc: "Android app using AR technology to preview 3D models in real-time by downloading them using FTP.",
    more: "Unity Engine for development, C# for scripting, Gradle for builds.",
    link: "https://github.com/krish-1010/ar-product-preview",
  },
  {
    title: "Nexus Webfolio",
    spanClass: "lightpurple b",
    desc: "A dynamic, space-themed web-folio for Anna University, with an AI chatbot to assist HRs.",
    more: "Next.js with GSAP for animations, AI chatbot with custom training, Cloudinary CDN for image optimization.",
    link: "https://domsauconnect.com/",
  },
  {
    title: "Space Board Game",
    spanClass: "lightpurple",
    desc: "A space-themed board game with dynamic animations and advanced layouts for interactive gameplay.",
    more: "Next.js for frontend and backend, PostgreSQL via Docker, GSAP and Framer for animations.",
    link: "https://github.com/krish-1010/dynamic-board-game",
  },
  {
    title: "Veloit AI",
    spanClass: "lightpurple wh",
    desc: "A no-code machine learning API which can be integrated in applications for machine learning.",
    more: "Frontend in Flutter; Flask and Firebase for backend.",
    link: "https://www.linkedin.com/company/veloit-ai/",
  },
  {
    title: "Brain Waves",
    spanClass: "lightpurple b",
    desc: "A method to interpret brain waves, with an aim to aid disabled people. Funded by Loyola Research Park.",
    more: "Non-invasive EEG is used with Python for ML algorithms.",
    // link: "",
    link: "/LRPC.pdf",
  },
  {
    title: "Pen-to-text",
    spanClass: "lightpurple",
    desc: "A web app that converts text from an image into editable digital text using OCR technology.",
    more: "Frontend in React.js, Pen-to-Print API for text recognition.",
    link: "https://pentotext.vercel.app/",
  },
  {
    title: "Least Squares Line Fitting Tool (GUI)",
    spanClass: "lightpurple wh",
    desc: "Desktop tool for fitting and visualizing best-fit lines using the Least Squares method.",
    more: "Built with PyQt5 and matplotlib for GUI and plotting. Displays linear equation for educational use.",
    link: "https://github.com/krish-1010/NumericalMethods",
  },
  {
    title: "ReviseIt - Bitwise Audio Revision App",
    spanClass: "lightpurple b",
    desc: "Audio-based revision platform with bite-sized lessons for students and UPSC aspirants.",
    more: "Built using Next.js and Supabase; seamless playback via Howler.js. Supports regional languages.",
    link: "https://reviseit.vercel.app/",
  },
  {
    title: "Invoice Automation Tool",
    spanClass: "lightpurple",
    desc: "Desktop tool for generating invoices from structured data with error checking.",
    more: "Developed with Python and JavaScript. Supports custom templates and CSV imports.",
    link: "",
  },
  {
    title: "Real-Time Chat App",
    spanClass: "lightpurple wh",
    desc: "React and Firebase based chat app supporting real-time messaging and multiple rooms.",
    more: "Features Google Auth, live updates, and dynamic message filtering.",
    link: "https://krishchat.vercel.app/",
  },
  {
    title: "Whisper AI Backend - German Pronunciation Evaluator",
    spanClass: "lightpurple",
    desc: "Python backend using OpenAI Whisper for German speech pronunciation scoring.",
    more: "Receives audio, returns similarity score and feedback via API.",
    link: "https://github.com/krish-1010/whisper-backend",
  },
  {
    title: "Dynamic Event Calendar",
    spanClass: "lightpurple",
    desc: "Dynamic React calendar app to create, edit, and view events with offline support.",
    more: "Uses TypeScript, TailwindCSS, and localStorage for persistence and smooth UX.",
    link: "https://krishcalendar.vercel.app/",
  },
  {
    title: "Gasgo UserHub - Microservice API Platform",
    spanClass: "lightpurple wh",
    desc: "Modular microservice system for user management, built with Java Spring Boot.",
    more: "REST APIs, Docker, MySQL, Swagger docs, and production-ready deployment.",
    link: "https://github.com/krish-1010/springboot-gasgo",
  },
  {
    title: "International Conference Website",
    spanClass: "lightpurple wh",
    desc: "Loyola college - International Conference on Materials - Energy Generation & Storage.",
    more: "Vanilla Javascript based Web page.",
    link: "https://icme.vercel.app/",
  },
  {
    title: "Langflow - AI - Chatbot",
    spanClass: "lightpurple wh",
    desc: "Full-stack AI-powered chat widget for Loyola College, providing real-time answers to student and visitor queries.",
    more: "Next.js 15, TS, Tailwind, Langflow (OpenAI backend), file-based chat logging.",
    link: "https://github.com/krish-1010/chatsupport",
  },
];

const PROJECTS_PER_SLIDE = 6;

// Utility: split array into chunks of N
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const Projects = () => {
  const projectChunks = chunkArray(projects, PROJECTS_PER_SLIDE);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };

  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2>
          <span className="gray">My </span>
          <span className="purple"> Projects</span>
        </h2>

        <Slider {...settings}>
          {projectChunks.map((group, slideIdx) => (
            <div key={slideIdx}>
              <div className="row">
                {group.map((project, idx) =>
                  project.link ? (
                    <a
                      href={project.link}
                      className="col box project-link"
                      key={idx}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <span className={project.spanClass}>{project.title}</span>
                      <h4 className="desc">{project.desc}</h4>
                      <p className="more">{project.more}</p>
                    </a>
                  ) : (
                    <div className="col box" key={idx}>
                      <span className={project.spanClass}>{project.title}</span>
                      <h4 className="desc">{project.desc}</h4>
                      <p className="more">{project.more}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
