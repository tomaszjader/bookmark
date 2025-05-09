import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/images/logo-bookmark.svg';
import Button from '../Button/Button';
import Facebook from '../../assets/images/icon-facebook.svg';
import FacebookRed from '../../assets/images/icon-facebook-red.svg';
import Twitter from '../../assets/images/icon-twitter.svg';
import TwitterRed from '../../assets/images/icon-twitter-red.svg';
import LogoWhite from '../../assets/images/logo-bookmark-white.svg';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoverFacebook, setIsHoverFacebook] = useState(false);
  const [isHoverTwitter, setIsHoverTwitter] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showSocialIcons = isOpen || windowWidth < 1200;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt='logo' className={isOpen ? 'logo-white' : ''} />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {showSocialIcons && (
            <div className="mobile-header">
              <img src={LogoWhite} alt='logo' />
            </div>
          )}
          <a href="#features" className="nav-link" onClick={handleLinkClick}>FEATURES</a>
          <a href="#pricing" className="nav-link" onClick={handleLinkClick}>PRICING</a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>CONTACT</a>
          <Button variant="contact">LOGIN</Button>
          {showSocialIcons && (
            <div className="social-links">
              <a
                href="https://facebook.com"
                className="social-link"
                onMouseEnter={() => setIsHoverFacebook(true)}
                onMouseLeave={() => setIsHoverFacebook(false)}
              >
                <img src={isHoverFacebook ? FacebookRed : Facebook} alt="Facebook" />
              </a>
              <a
                href="https://twitter.com"
                className="social-link"
                onMouseEnter={() => setIsHoverTwitter(true)}
                onMouseLeave={() => setIsHoverTwitter(false)}
              >
                <img src={isHoverTwitter ? TwitterRed : Twitter} alt="Twitter" />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;