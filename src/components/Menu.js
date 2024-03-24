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
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/about">Giới Thiệu</Link></li>
        <li><Link to="/services">Dịch Vụ</Link></li>
        <li><Link to="/projects">Công Trình</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li class="contact"><Link to="/contact">Liên Hệ Chúng Tôi</Link></li>
      </ul>
    </nav>
  );
}

// Export the Menu component
export default Menu;

