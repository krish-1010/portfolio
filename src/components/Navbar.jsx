import React, { useState, useEffect } from "react";
import logo from "./imgs/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // State that tracks whether header has background or not
  const [color, setColor] = useState(false);

  // Get the current path with useLocation
  const location = useLocation();

  // If not on homepage ("/"), always set header-bg; otherwise, toggle based on scroll
  useEffect(() => {
    if (location.pathname !== "/") {
      setColor(true);
    } else {
      setColor(window.scrollY >= 90);
    }
  }, [location]);

  // Also handle scroll for the homepage
  const changeColorOnScroll = () => {
    if (location.pathname === "/") {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColorOnScroll);
    return () => {
      window.removeEventListener("scroll", changeColorOnScroll);
    };
    // eslint-disable-next-line
  }, [location]);

  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <div className="logo-block">
          <Link to="/" onClick={closeMenu} className="logo">
            <img src={logo} alt="logo" />
            <span className="logo-text">KRISHNA</span>
          </Link>
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "white" }} />
          ) : (
            <FaBars size={30} style={{ color: "white" }} />
          )}
        </div>

        <ul className={click ? "nav__menu active" : "nav__menu"}>
          {/* Home Link */}
          <li className="nav__item">
            {location.pathname === "/" ? (
              <ScrollLink
                onClick={closeMenu}
                to="hero"
                smooth={true}
                spy={true}
                offset={-70}
              >
                Home
              </ScrollLink>
            ) : (
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            )}
          </li>

          {/* About Link */}
          <li className="nav__item">
            {location.pathname === "/" ? (
              <ScrollLink
                onClick={closeMenu}
                to="about"
                smooth={true}
                spy={true}
                offset={-90}
              >
                About
              </ScrollLink>
            ) : (
              <Link to="/" onClick={closeMenu}>
                About
              </Link>
            )}
          </li>

          {/* Projects Link */}
          <li className="nav__item">
            {location.pathname === "/" ? (
              <ScrollLink
                onClick={closeMenu}
                to="projects"
                smooth={true}
                spy={true}
                offset={-90}
              >
                Projects
              </ScrollLink>
            ) : (
              <Link to="/" onClick={closeMenu}>
                Projects
              </Link>
            )}
          </li>

          {/* Blog Link (New) */}
          <li className="nav__item">
            <a
              href="https://blog.mkrishna.dev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Blog
            </a>
          </li>

          {/* Gallery Link */}
          <li className="nav__item">
            {location.pathname === "/" ? (
              <ScrollLink
                onClick={closeMenu}
                to="gallery"
                smooth={true}
                spy={true}
                offset={-90}
              >
                Gallery
              </ScrollLink>
            ) : (
              <Link to="/" onClick={closeMenu}>
                Gallery
              </Link>
            )}
          </li>

          {/* Testimonials Link */}
          <li className="nav__item">
            {location.pathname === "/" ? (
              <ScrollLink
                onClick={closeMenu}
                to="testimonials"
                smooth={true}
                spy={true}
                offset={-90}
              >
                Testimonials
              </ScrollLink>
            ) : (
              <Link to="/" onClick={closeMenu}>
                Testimonials
              </Link>
            )}
          </li>

          {/* Contact Link */}
          <li className="nav__item">
            {location.pathname === "/" ? (
              <ScrollLink
                onClick={closeMenu}
                to="contact"
                smooth={true}
                spy={true}
                offset={-90}
              >
                Contact
              </ScrollLink>
            ) : (
              <Link to="/" onClick={closeMenu}>
                Contact
              </Link>
            )}
          </li>

          {/* Resume Button (Renamed to be smaller) */}
          <a
            href="/Krishna_M_Resume-SDE.pdf"
            download
            className="download-btn"
            onClick={closeMenu}
          >
            Resume
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
