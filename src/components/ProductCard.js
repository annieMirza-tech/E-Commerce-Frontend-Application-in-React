// src/components/ProductCard.js
import React, { useState } from 'react';
import './ProductCard.css'; // Ensure CSS file is correctly linked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons'; // Regular icons are used here for the outline effect

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleAddToCart = () => {
    // Add product to cart logic
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <div className="overlay">
          <div className="icons">
            <button className="cart-icon" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button className="like-icon" onClick={handleLike}>
              <FontAwesomeIcon icon={faHeart} color={liked ? 'black' : 'black'} />
            </button>
          </div>
          <div className="quick-view-wrapper">
            <button className="quick-view">
              <FontAwesomeIcon icon={faEye} /> Quick View
            </button>
          </div>
        </div>
      </div>
      <h4>{product.title}</h4>
      <div className="color-option">
        {product.colors.map(color => (
          <div key={color} className="color" style={{ backgroundColor: color }}></div>
        ))}
      </div>
      <div className="rating">
        {/* Add star rating logic */}
        <span>⭐⭐⭐⭐⭐</span>
      </div>
      <p className="price">${product.price}</p>
    </div>
  );
};

export default ProductCard;
