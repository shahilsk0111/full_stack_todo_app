// src/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          MyLogo
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
