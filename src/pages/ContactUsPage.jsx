import React from "react";
import "./Contactus.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
const ContactUsPage = () => {
  return (
    <div
      className="contact"
      id="contactus"
      style={{
        // background: "black",
        // color: "white",
        marginBottom: "50px",
        padding: "1rem",
        marginTop: "5rem",
        minHeight: "70vh",
      }}
    >
      <div className="container">
        <h2>
          <span className="purple">Contact </span>
          <span className="gray"> Me</span>
        </h2>
        <section className="box">
          <div className="contain">
            <div className="email">
              <a href="mailto:mkrishna.inbox@gmail.com">
                <i className="icons">
                  <HiOutlineMail className="icon email-icon" />
                </i>
              </a>
              <div className="details-div">
                <h4>Email:</h4>
                <p>mkrishna.inbox@gmail.com</p>
              </div>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/krishna-m-013480203/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="icons">
                  <BsLinkedin className="icon" />
                </i>
              </a>
              <div className="details-div">
                <h4>LinkedIn</h4>
                <p>connect with me on linkedin</p>
              </div>
            </div>
          </div>
          <form
            action="https://getform.io/f/82943b03-8289-4ff9-bd88-d31bc4601ce4"
            method="POST"
            className="form"
          >
            <div className="row-c row1">
              <div className="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="email-input">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="row-c row2">
              <div className="subject">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
            </div>
            <div className="row-c row3">
              <div className="message">
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
            <button className="message-button">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;
