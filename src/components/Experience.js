import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2>
          <span className="gray">My </span>
          <span className="purple"> Experience</span>
        </h2>

        <section id="experience" className="experience">
          <div className="container">
            <div className="section-title"></div>
            <div className="row">
              <div className="col-lg-3 mt-5">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "tab1" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("tab1")}
                    >
                      Director of Human Resources
                    </button>
                  </li>
                  {/* Repeat for other tabs */}
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "tab2" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("tab2")}
                    >
                      Director of Human Resources 2
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                  {activeTab === "tab1" && (
                    <div className="tab-pane active show" id="tab-1">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1 mt-5">
                          <h3>Director of Human Resources, Pattarai</h3>
                          <p className="font-italic">
                            Managed plans, coordinated and directed the
                            administrative functions of the organization.
                          </p>
                          {/* More details */}
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2 mt-5">
                          <img
                            src="assets/img/HR.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Repeat for other tabs */}
                  {activeTab === "tab2" && (
                    <div className="tab-pane active show" id="tab-2">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1 mt-5">
                          <h3>Director of Human Resources, 2</h3>
                          <p className="font-italic">
                            Managed plans, coordinated and directed the
                            administrativzation.
                          </p>
                          {/* More details */}
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2 mt-5">
                          <img
                            src="assets/img/HR.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
