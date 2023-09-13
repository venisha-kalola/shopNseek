import React from 'react';
import "./mainPage.css";
const HomePage = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <h1 className="bold-statement">Your One Stop Solution For Comparing Prices</h1>
        <p className="less-bold-statement">Your trusted destination for price comparisons, product exploration, and savvy shopping across various e-commerce sites, ensuring you get the best value for your money.</p>
        <div className="button-container">
          <button className="browse-button">Browse More...</button>
          <button className="login-button">Sign Up / Login</button>
        </div>
      </div>
      <div className="right-section">
        {/* Add your large image here */}
        <img src="airbnb2.png" alt="Large Background" />
      </div>
    </div>
  );
};

export default HomePage;
