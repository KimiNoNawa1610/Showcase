import React from "react";
import SolutionStep from "../components/SolutionStep"; // Importing the SolutionStep component
import "../css/About.css"; // Importing the CSS file for styling

// About component represents the About Us section of the application
const About = () => {
  return (
    <div className="about-section" id="about">
      {/* About section content */}
      <div className="about-image-content">
        <img src='/about.jpg' alt="description" className="about-image1" />
      </div>

      <div className="about-text-content">
        {/* About section title and description */}
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Description
        </p>

        {/* Subtitle for solutions */}
        <h4 className="about-text-title">Your Solutions</h4>

        {/* Rendering SolutionStep components with different titles and descriptions */}
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

// Export About component
export default About;
