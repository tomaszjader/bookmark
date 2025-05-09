import React from 'react';
import './Navbar.css';
import Logo from '../../assets/images/logo-bookmark.svg';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo"><img src={Logo}/></div>
        <div className="navbar-links">
          <a href="#features" className="nav-link">FEATURES</a>
          <a href="#pricing" className="nav-link">PRICING</a>
          <a href="#contact" className="nav-link">CONTACT</a>
          <Button variant="contact">LOGIN</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;