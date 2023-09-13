import React, { useState } from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling

function Navbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <i className="fas fa-home "></i> 
        <p className='title'>Shop N Seek</p>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="What are you looking For ?"
          className="search-bar"
        />
      </div>
      <div className="navbar-right">
        <i className="fas fa-shopping-cart wishlist text">Wishlist</i>
        <div className="profile-icon" onClick={toggleProfileMenu}>
          <i className="fas fa-user text"></i> 
          {showProfileMenu && (
            <div className="profile-menu">
              <ul>
                <li>
                  <a href="#">View Profile</a>
                </li>
                <hr></hr>
                <li>
                  <a href="#">Sign Out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
