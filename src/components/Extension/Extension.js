import React from 'react';
import './Extension.css';
import ChromeLogo from '../../assets/images/logo-chrome.svg';
import FirefoxLogo from '../../assets/images/logo-firefox.svg';
import OperaLogo from '../../assets/images/logo-opera.svg';
import Button from '../Button/Button';

const Extension = () => {
  return (
    <section className="extension" id='pricing'>
      <div className="extension-container">
        <div className="extension-header">
          <h2>Download the extension</h2>
          <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        </div>
        <div className="extension-cards">
          <div className="browser-card">
            <img src={ChromeLogo} alt="Chrome logo" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
            <Button variant="primary">Add & Install Extension</Button>
          </div>
          <div className="browser-card">
            <img src={FirefoxLogo} alt="Firefox logo" />
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
            <Button variant="primary">Add & Install Extension</Button>
          </div>
          <div className="browser-card">
            <img src={OperaLogo} alt="Opera logo" />
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
            <Button variant="primary">Add & Install Extension</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extension;