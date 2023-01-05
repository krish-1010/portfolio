import { React, useState } from "react";
import "./BackToTop.css";
import { Link } from "react-scroll";
import { RiArrowUpSLine } from "react-icons/ri";

const BackToTop = () => {
  const [arrow, setArrow] = useState(false);
  const backTotop = () => {
    if (window.scrollY >= 90) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  window.addEventListener("scroll", backTotop);
  return (
    <div className={arrow ? "btt active" : "btt"}>
      <Link to="home" spy={true} smooth={true}>
        <i className="btt-style">
          <RiArrowUpSLine size={30} className="arrow" />
        </i>
      </Link>
    </div>
  );
};

export default BackToTop;
