import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/logo-bookmark-white.svg';
import Facebook from '../../assets/images/icon-facebook.svg';
import Twitter from '../../assets/images/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Bookmark Logo" />
        </div>
        <div className="footer-links">
          <a href="#features" className="footer-link">FEATURES</a>
          <a href="#pricing" className="footer-link">PRICING</a>
          <a href="#contact" className="footer-link">CONTACT</a>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" className="social-link">
            <img src={Facebook} alt="Twitter" />
          </a>
          <a href="https://twitter.com" className="social-link">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;