import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import instaIcon from '../images/icon-insta.png';
import fbIcon from '../images/icon-fb.png';

import '@fortawesome/fontawesome-free/css/all.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Apna Cafe</Link>
        <div className="navbar-links">
          <Link to="/menu">What We Sell</Link>
          <Link to="/reservation">Reservations  </Link>
          <Link to="/order">Order Online</Link>
          <Link to="/about">About Us</Link> 
        
        </div>
        <div class = "widgets"> 
         <a href = "#">+91 7973588176</a> 
        <a href = "facebook.com"><img src={fbIcon} alt="facebook-icon" className="icon" /></a>
        <a href = "https://www.instagram.com/garv_sharma_/"><img src={instaIcon} alt="insta-icon" className="icon" /></a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
