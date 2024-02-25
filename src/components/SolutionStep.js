import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

// SolutionStep component represents a step in a solution or process
function SolutionStep(props) {
  return (
    <div className="about-text-step">
      {/* Step title with a FontAwesome icon */}
      <p className="about-text-sTitle">
        <span>
          <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
          {props.title}
        </span>
      </p>
      {/* Step description */}
      <p className="about-text-description">{props.description}</p>
    </div>
  );
}

// Export SolutionStep component
export default SolutionStep;
