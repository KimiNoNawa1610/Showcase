import React from "react";
import SolutionStep from "../components/SolutionStep";
import "../css/About.css";


function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src='/about.jpg' alt="description" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Description
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="a"
          description="a"
        />

        <SolutionStep
          title="b"
          description="b"
        />

        <SolutionStep
          title="c"
          description="c"
        />
      </div>
    </div>
  );
}

export default About;