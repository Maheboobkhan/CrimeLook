// import React from "react";
// import "../Navbar/Navbar.css";
// import {Link} from 'react-router-dom';
// import { FaSignInAlt, FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       <div className="top-ribbon">
//         <p className="ribbon-text-1 text-animation-1">Published from Madhya Pradesh, Uttar Pradesh and Chattisgarh</p>
//         <p className="ribbon-text-2 text-animation-2">National Hindi Monthly Magazine</p>
//         <div className="icon-box">
//           <FaFacebookF color="white" size={20} className="ribbon-icon" />
//           <FaGooglePlusG color="white" size={20} className="ribbon-icon" />
//           <FaTwitter color="white" size={20} className="ribbon-icon" />
//         </div>
//       </div>
//       <div className="navbar-title-container">
//         <div className="navbar-title-1"></div>
//         <h1>Crime Look</h1>
//       </div>
//       <div className="navbar-list-container">

//         <ul className="navbar-list">
//           <Link style={{textDecoration: 'none'}} to='/'><li>Main Page</li></Link>
//           <Link style={{textDecoration: 'none'}} to='/about us'><li>About Us</li></Link>
//           <Link style={{textDecoration: 'none'}} to='/gallery'><li>Gallery</li></Link>
//           <Link style={{textDecoration: 'none'}} to='/contact'><li>Contact</li></Link>
//           <Link style={{textDecoration: 'none'}} to='/davp/rni'><li>DAVP/RNI</li></Link>
//           <Link style={{textDecoration: 'none'}} to='/advertising rate'><li>Advertising Rate</li></Link>        
//         </ul>
//         <Link style={{textDecoration: 'none'}} to='/log in'><button className="login-button">
//       <FaSignInAlt className="login-icon" />
//       Log In
//     </button></Link>
        
//       </div>
//     </div>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';

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
        <h1>Crime Look</h1>
      </div>
      {/* Hamburger menu for mobile */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-list-container ${isActive ? 'active' : ''}`}>
        <ul className="navbar-list">
          <Link style={{textDecoration: 'none'}} to='/'><li>Main Page</li></Link>
          <Link style={{textDecoration: 'none'}} to='/about us'><li>About Us</li></Link>
          <Link style={{textDecoration: 'none'}} to='/gallery'><li>Gallery</li></Link>
          <Link style={{textDecoration: 'none'}} to='/contact'><li>Contact</li></Link>
          <Link style={{textDecoration: 'none'}} to='/davp/rni'><li>DAVP/RNI</li></Link>
          <Link style={{textDecoration: 'none'}} to='/advertising rate'><li>Advertising Rate</li></Link>        
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
