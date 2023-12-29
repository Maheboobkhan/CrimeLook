import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import logo from "../../../../public/logo.png"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar-container">
      <div className="top-ribbon">
        <p className="ribbon-text-1 text-animation-1">Published from Madhya Pradesh, Uttar Pradesh and Chattisgarh</p>
        <p className="ribbon-text-2 text-animation-2">National Hindi Monthly Magazine</p>
        <div className="icon-box">
          <FaFacebookF color="white" size={20} className="ribbon-icon" />
          <FaGooglePlusG color="white" size={20} className="ribbon-icon" />
          <FaTwitter color="white" size={20} className="ribbon-icon" />
        </div>
      </div>
      <div className="navbar-title-container">
        <div className="navbar-title-1"></div>
        {/* <h1>Crime Look</h1> */}
        <img src={logo} />
      </div>
      {/* Hamburger menu for mobile */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-list-container ${isActive ? 'active' : ''}`}>
        <ul className="navbar-list">
          <Link to='/' style={{textDecoration: 'none'}}><li>Main Page</li></Link>
          <Link to='/about' style={{textDecoration: 'none'}}><li>About Us</li></Link>
          <Link to='/gallery' style={{textDecoration: 'none'}}><li>Gallery</li></Link>
          <Link to='/contact' style={{textDecoration: 'none'}}><li>Contact</li></Link>
          <Link to='/davp/rni' style={{textDecoration: 'none'}}><li>DAVP/RNI</li></Link>
          <Link to='/advertisement' style={{textDecoration: 'none'}}><li>Advertising Rate</li></Link>        
        </ul>
        <Link style={{textDecoration: 'none'}} to='/log in'>
          <button className="login-button">
            <FaSignInAlt className="login-icon" />
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;