import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/InfoCard.css'

// InformationCard component displays an information card with an icon, title, and description
function InformationCard(props) {
  return (
    <div className="info-cards">
      {/* Renders the icon using FontAwesomeIcon component */}
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
      </span>
      {/* Renders the title */}
      <p className="info-card-title">{props.title}</p>
      {/* Renders the description */}
      <p className="info-card-description">{props.description}</p>
    </div>
  );
}

// Exporting InformationCard component
export default InformationCard;
