// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img src="/images/bglogo.png" alt="Company Logo" />
          </div>
          <div className="footer-company-info">
            <p className="footer-info-text">Sign up for our newsletter to receive updates on special offers, news, and events.</p>
            <p className="footer-info-bold">Head Office: <span className="footer-info-text">313 Cook Hill Road, Ceriden, Connecticut, USA</span></p>
            <p className="footer-info-bold">Phone: <span className="footer-info-text">+866.597.2742</span></p>
            <p className="footer-info-bold">Email: <a href="mailto:support@wookids.com" className="footer-info-text">support@wookids.com</a></p>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook">
              <img src="/images/fb.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src="/images/insta.png" alt="Instagram" />
            </a>
            <a href="https://email.com" aria-label="Twitter">
              <img src="/images/email.png" alt="Twitter" />
            </a>
            <a href="https://call.com" aria-label="YouTube">
              <img src="/images/call.png" alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Shop</h4>
          <ul>
            <li><a href="/baby-girl">Baby Girl</a></li>
            <li><a href="/baby-boy">Baby Boy</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/bags">Bags</a></li>
            <li><a href="/footwear">Footwear</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/the-team">The Team</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="/contact-faq">Contact & FAQ</a></li>
            <li><a href="/track-order">Track Your Order</a></li>
            <li><a href="/returns-refunds">Returns & Refunds</a></li>
            <li><a href="/shipping-delivery">Shipping & Delivery</a></li>
            <li><a href="/interest-free-finance">Interest Free Finance</a></li>
            <li><a href="/cipmoney">Cipmoney</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Sheeso.com. All Rights Reserved.</p>
        <div className="footer-credit-cards">
          <img src="/images/visa.png" alt="Visa" />
          <img src="/images/mc.png" alt="Mastercard" />
          <img src="/images/skrill.png" alt="Skrill" />
          <img src="/images/pp.png" alt="PayPal" />
          <img src="/images/ep.png" alt="Easypaisa" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
