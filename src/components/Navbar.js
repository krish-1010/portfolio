import React, { useState } from "react";
import logo from "./imgs/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo-block">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <p>KRISHNA</p>
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
              className="pointer"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link className="pointer" to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link className="pointer" href="/">
              Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link className="pointer" href="/">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
