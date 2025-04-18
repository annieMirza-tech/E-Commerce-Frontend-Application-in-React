import React, { useState } from 'react';
import PrimaryNavbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import SliderAndCategoryView from './components/SliderAndCategoryView';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import LoginForm from './components/LoginForm';
import ProductCategoryPage from './components/ProductCategoryPage'; 
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [categoryId, setCategoryId] = useState(null);

  const handleCardClick = (id) => {
    setCategoryId(id); // Set the category ID
    setActivePage('category'); // Update the active page to 'category'
  };

  const handleCartClick = () => {
    setActivePage('cart'); // Set the active page to 'cart'
  };

  const handleCheckoutClick = () => {
    setActivePage('checkout'); // Set the active page to 'checkout'
  };

  const handleAccountClick = () => {
    setActivePage('Account');
  };
  const handleContactClick = () => {
    setActivePage('Contact');
  }
  const handleBackToHome = () => {
    setActivePage('home');
    setCategoryId(null);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <SliderAndCategoryView
            onCardClick={handleCardClick}
            showImageSlider={true}
          />
        );
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'Account':
        return <LoginForm />;
      case 'Contact':
        return <ContactUs />;
      case 'category':
        return (
          <div>
            <ProductCategoryPage categoryId={categoryId} />
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="App">
      <PrimaryNavbar />
      <SecondaryNavbar onCartClick={handleCartClick} onCheckoutClick={handleCheckoutClick} onAccountClick={handleAccountClick} onContactClick={handleContactClick} />
      <div className="content-container">
        {renderContent()}
      </div>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
}

export default App;
