import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/ProcessCard.css'

// InformationCard component displays an information card with an icon, title, and description
function ProcessCard(props) {
  return (
    <div className="process-cards">
      {/* Renders the icon using FontAwesomeIcon component */}
      <span className="process-card-icon">
        <FontAwesomeIcon className="process-fa-icon" icon={props.icon} />
      </span>
      {/* Renders the title */}
      <p className="process-card-title">{props.title}</p>
      {/* Renders the description */}
      <p className="process-card-description">{props.description}</p>
    </div>
  );
}

// Exporting InformationCard component
export default ProcessCard;
