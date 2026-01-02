import "./Links.css";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaSteam,
  //   FaFacebook,
  FaDiscord,
} from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";
import profileImg from "./imgs/krish.png";
import { Helmet } from "react-helmet-async";

const size = 40;

const Links = () => {
  const socialLinks = [
    { name: "Portfolio", icon: <HiGlobeAlt size={size} />, url: "/" },
    {
      name: "Instagram",
      icon: <FaInstagram size={size} color="#E1306C" />,
      url: "https://instagram.com/mkrishna.dev",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={size} color="#0077B5" />,
      url: "https://www.linkedin.com/in/mkrishna10",
    },
    {
      name: "Github",
      icon: <FaGithub size={size} color="#333" />,
      url: "https://github.com/krish-1010",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={size} color="#FF0000" />,
      url: "https://youtube.com/channel/UC-g-I3XjiqDSsad3WRLKdbw",
    },
    {
      name: "Steam",
      icon: <FaSteam size={size} color="#171a21" />,
      url: "https://steamcommunity.com/id/krishna10",
    },
    // {
    //   name: "Facebook",
    //   icon: <FaFacebook size={size} color="#1877F2" />,
    //   url: "https://www.facebook.com/krishna.chan.00710/",
    // },
    {
      name: "Discord",
      icon: <FaDiscord size={size} color="#7289DA" />,
      url: "https://discord.gg/7k3xQNsdwz",
    },
  ];

  return (
    <div className="links-container">
      <Helmet>
        <title>Krishna | Links</title>
        <meta name="description" content="All my social links, portfolio, and contact info in one place." />
        <link rel="canonical" href="https://mkrishna.dev/links" />

        {/* Social Media Preview */}
        <meta property="og:title" content="Connect with Krishna" />
        <meta property="og:description" content="Developer, Mentor, Gamer. Click to connect." />
        <meta property="og:image" content="https://mkrishna.dev/my-logo.png" />
        <meta property="og:url" content="https://mkrishna.dev/links" />
      </Helmet>
      <div className="profile-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Krishna" />
        </div>
        <h1>Krishna</h1>
        <p className="bio">
          Software Engineer, Mentor, Gamer, Space tech, Physics, Keyboard 🎹,
          Chess♟️
        </p>
      </div>

      <div className="buttons-list">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.name === "Portfolio" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="link-card"
          >
            <div className="icon-wrapper">{link.icon}</div>
            <span className="link-text">{link.name}</span>
          </a>
        ))}
      </div>

      <footer className="links-footer">
        <p>© 2026 Krishna M. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Links;
