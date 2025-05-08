import React from 'react';
import './Navbar.css';
import Logo from '../../assets/images/logo-bookmark.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><img src={Logo}/></div>
        <div className="navbar-links">
          <a href="#features" className="nav-link">FEATURES</a>
          <a href="#pricing" className="nav-link">PRICING</a>
          <a href="#contact" className="nav-link">CONTACT</a>
          <a href="#login" className="nav-link login-btn">LOGIN</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;