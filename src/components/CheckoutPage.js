import React from 'react';
import './CheckoutPage.css'; 

const CheckoutPage = () => {
  return (
    <div className="cart-page">
      <div className="cart-banner">
        <div className="cart-message">
          <span className="empty-icon">🛒</span> {/* You can use an empty cart icon or emoji */}
          <p>Your cart is currently empty.</p>
        </div>
      </div>
      <button className="return-shop-button">Return to Shop</button>
    </div>
  );
};

export default CheckoutPage;
