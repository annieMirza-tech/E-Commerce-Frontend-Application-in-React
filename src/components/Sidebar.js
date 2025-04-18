// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Create a CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="filter-section">
        <h3>Filters</h3>
        <div className="filter-option">
          <input type="checkbox" id="instock" />
          <label htmlFor="instock">In Stock</label>
        </div>
        <div className="filter-option">
          <h4>Price Range</h4>
          <input type="range" min="0" max="10000" />
        </div>
        <div className="filter-option">
          <h4>Color</h4>
          <div className="color-options">
            <div className="color-box" style={{ backgroundColor: '#ff0000' }}></div>
            <div className="color-box" style={{ backgroundColor: '#00ff00' }}></div>
            <div className="color-box" style={{ backgroundColor: '#0000ff' }}></div>
            {/* Add more colors as needed */}
          </div>
        </div>
        <div className="filter-option">
          <h4>Size</h4>
          <div className="size-options">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
