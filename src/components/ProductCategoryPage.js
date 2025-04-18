// src/components/ProductCategoryPage.js
import React from 'react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import './ProductCategoryPage.css'; // Create a CSS file for styling

const ProductCategoryPage = () => {
  const products = [
    // Example product data
    {
      id: 1,
      image: '/images/cat1.jpg',
      title: 'Product 1',
      colors: ['#ff0000', '#00ff00', '#0000ff'],
      price: 199.99,
    },
    // Add more products as needed
  ];

  return (
    <div className="product-category-page">
      <Sidebar />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
