import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className = "visitUs">
        <h3>Visit Us</h3>
        <h4>#303 Escort Vatika, Verka</h4>
        <h4>Amritsar 143001</h4>
        <h4>+91 7973588176</h4>
      </div>

      <div className="navigation">
        <h3>Navigation</h3>
        <a href = "/menu">What We Sell</a><hr></hr>
        <a href = "/about">About</a><hr></hr>
        <a href = "/about">Order Online</a>
      </div>
      <hr className='bottom-hr'></hr>
      <div className='copyright-content'>
      <p>&copy; 2004 Apna Cafe. All rights reserved.</p>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/refund-policy">Refund and Cancellation Policy</Link>
      </div>
    </footer>
  );
}

export default Footer;
