import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <FontAwesomeIcon icon={faLocationPin} className="icon" />
        <span className="text">Store Location</span>
        <div className="vertical-line"></div> {/* Vertical line added */}
        <div className="email-container">
          <FontAwesomeIcon icon={faEnvelope} className="icon email-icon" />
          <span className="email">info@example.com</span>
        </div>
      </div>
      
      <div className="navbar-center">
        <span className="shipping-info">
          Free Shipping on all orders $100+ USD! <a href="/shop" className="shop-now">Shop Now</a>
        </span>
      </div>
      
      <div className="navbar-right">
        <select className="dropdown">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="PKR">PKR</option>
        </select>
        <select className="dropdown">
          <option value="EN">English</option>
          <option value="FR">French</option>
          <option value="DE">German</option>
          {/* Add other languages here */}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
