// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css'; // Import the CSS file for styling

const Menu = () => {
  return (
    <nav className="menu">
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

export default Menu;
