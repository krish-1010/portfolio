import React, { useState } from "react";
import logo from "./imgs/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const closeMenu = () => setClick(false);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <div className="logo-block">
          <Link to="hero" spy={true} smooth={true} className="logo">
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
          <li className="nav__item">
            <Link
              onClick={closeMenu}
              // activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              onClick={closeMenu}
              offset={-90}
              to="about"
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link
              onClick={closeMenu}
              offset={-90}
              to="projects"
              spy={true}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li onClick={closeMenu} className="nav__item">
            <Link className="pointer">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
