import React from "react";
import "./Footer.css";
import { FaSteam, FaInstagram, FaLinkedinIn, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <h3>KRISHNA</h3>
        <p>Connect with me</p>
        
        <div className="my-links">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mkrishna10/"
            target="_blank"
            rel="noreferrer"
            className="icon-bg"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="my-icon" />
          </a>

          {/* Steam */}
          <a
            href="https://steamcommunity.com/id/krishna10"
            target="_blank"
            rel="noreferrer"
            className="icon-bg"
            aria-label="Steam"
          >
            <FaSteam className="my-icon" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mkrishna.tech"
            target="_blank"
            rel="noreferrer"
            className="icon-bg"
            aria-label="Instagram"
          >
            <FaInstagram className="my-icon" />
          </a>

          {/* New Internal Link to Bio/Links Page */}
          <Link to="/links" className="icon-bg" aria-label="Link Tree">
            <FaLink className="my-icon" />
          </Link>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Krishna M. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;