import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './SecondaryNavbar.css';

const SecondaryNavbar = ({ onCartClick, onCheckoutClick, onAccountClick, onContactClick}) => {

  return (
    <div>
      <div className="secondary-navbar">
        <div className="left-side">
          <img src="/images/logo.jpg" alt="Logo" className="logo" />
          <a href="/" className="nav-link">HOME</a>
          <div className="dropdown">
            <button className="dropdown-button">SHOP <FontAwesomeIcon icon={faCaretDown} /></button>
            <div className="dropdown-content">
              <a href="#cart" onClick={onCartClick}>Cart</a> {/* Call onCartClick to handle page change */}
              <a href="#checkout" onClick={onCheckoutClick}>Checkout</a> {/* Call onCheckoutClick to handle page change */}
              <a href="#account" onClick={onAccountClick}>Account</a>{/* Call onContactClick to handle page change */}
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">PAGES <FontAwesomeIcon icon={faCaretDown} /></button>
            <div className="dropdown-content">
              <a href="/about-us">About Us</a>
              {/* Add other page links here */}
            </div>
          </div>
          <a href="#contactus" onClick={onContactClick} className="contact-link">CONTACT US</a>
          </div>
        <div className="navbar-right">
          <div className="search-bar-container">
            <input type="text" placeholder="Search products..." className="search-bar" />
            <FontAwesomeIcon icon={faSearch} className="search-bar-icon" />
          </div>
          <FontAwesomeIcon icon={faUser} className="icon" />
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
