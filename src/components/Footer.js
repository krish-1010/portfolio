import React from "react";
import "./Footer.css";
import { FaSteam } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <h3>KRISHNA</h3>
        <p>Connect with me</p>
        <div className="my-links">
          <a
            href="https://www.linkedin.com/in/krishna-m10/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon-bg">
              <FaLinkedinIn className="my-icon" />
            </i>
          </a>
          <a
            href="https://steamcommunity.com/id/krishna10"
            target="_blank"
            rel="noreferrer"
            className="icon-bg"
          >
            <i>
              <FaSteam className="my-icon" />
            </i>
          </a>
          <a
            href="https://www.instagram.com/_.krypt1c._/?theme=dark"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon-bg">
              <FaInstagram className="my-icon" />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
