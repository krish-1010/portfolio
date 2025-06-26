// import React, { useState } from "react";
// import logo from "./imgs/logo.png";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   const [color, setColor] = useState(false);

//   const changeColor = () => {
//     if (window.scrollY >= 90) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);

//   const closeMenu = () => setClick(false);
//   return (
//     <div className={color ? "header header-bg" : "header"}>
//       <nav className="navbar">
//         <div className="logo-block">
//           <Link to="hero" spy={true} smooth={true} className="logo">
//             <img src={logo} alt="logo" />
//             <span className="logo-text">KRISHNA</span>
//           </Link>
//         </div>

//         <div className="hamburger" onClick={handleClick}>
//           {click ? (
//             <FaTimes size={30} style={{ color: "white" }} />
//           ) : (
//             <FaBars size={30} style={{ color: "white" }} />
//           )}
//         </div>
//         <ul className={click ? "nav__menu active" : "nav__menu"}>
//           <li className="nav__item">
//             <Link
//               onClick={closeMenu}
//               // activeClass="active"
//               to="home"
//               spy={true}
//               smooth={true}
//             >
//               Home
//             </Link>
//           </li>
//           <li className="nav__item">
//             <Link
//               onClick={closeMenu}
//               offset={-90}
//               to="about"
//               spy={true}
//               smooth={true}
//             >
//               About
//             </Link>
//           </li>
//           <li className="nav__item">
//             <Link
//               onClick={closeMenu}
//               offset={-90}
//               to="projects"
//               spy={true}
//               smooth={true}
//             >
//               Projects
//             </Link>
//           </li>
//           <li onClick={closeMenu} className="nav__item">
//             <Link
//               onClick={closeMenu}
//               offset={-90}
//               to="contact"
//               spy={true}
//               smooth={true}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import logo from "./imgs/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
// 1) Import 'useLocation' from 'react-router-dom'
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // 2) State that tracks whether header has background or not
  const [color, setColor] = useState(false);

  // 3) Get the current path with useLocation
  const location = useLocation();

  // 4) If not on homepage ("/"), always set header-bg; otherwise, toggle based on scroll
  useEffect(() => {
    if (location.pathname !== "/") {
      // Force background color on all non-home pages
      setColor(true);
    } else {
      // On home page, set it initially false, then use scroll logic
      setColor(window.scrollY >= 90);
    }
  }, [location]);

  // 5) Also handle scroll for the homepage
  const changeColorOnScroll = () => {
    if (location.pathname === "/") {
      // Only apply the scroll-based background if we're on the home route
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

  // 6) Close menu on small screens
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <div className="logo-block">
          {/* 
            On the homepage, you might want a scroll link to “hero”.
            On other pages, you might want a normal Link to "/".
            One common approach is to *always* link to "/", 
            and let the homepage handle auto-scroll if desired.
          */}
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

        {/* For in-page sections on the home route, use react-scroll's ScrollLink */}
        <ul className={click ? "nav__menu active" : "nav__menu"}>
          {/* Example: Home link */}
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
              // If not on home, navigate to "/"
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            )}
          </li>

          {/* About link */}
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

          {/* Projects link */}
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

          {/* Gallery link */}
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

          {/* Contact link */}
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

          <a
            href="/Krishna_M_Resume-SDE.pdf"
            download
            // className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            className="download-btn"
          >
            Download Resume
          </a>

          {/* Example: Terms & Conditions or other policy pages, purely router-based */}
          {/* <li className="nav__item">
            <Link to="/terms-and-conditions" onClick={closeMenu}>
              Terms
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/privacy-policy" onClick={closeMenu}>
              Privacy
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
