import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Process.css";

function Process() {

  return (
    <div className="ba-section">

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Processing Steps</span>
        </h3>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#F8560F" }} /> STEP 1
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#F8560F" }} /> STEP 2
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#F8560F" }} /> STEP 3
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#F8560F" }} /> STEP 4
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#F8560F" }} /> STEP 5
        </p>

      </div>
    </div>
  );
}

export default Process;