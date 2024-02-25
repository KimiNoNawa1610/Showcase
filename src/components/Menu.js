// Menu.js
// This component represents the navigation menu of the application.
// It contains links to different pages/routes using React Router.
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css'; // Import the CSS file for styling

// Menu component
const Menu = () => {
  return (
    <nav className="menu">
      <img src='/logo.png' alt="logo" className="logo" />
      {/* List of navigation links */}
      <ul className="menu-list">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}

// Export the Menu component
export default Menu;

