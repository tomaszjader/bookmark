import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <p className="joined-text">35,000+ ALREADY JOINED</p>
          <h2>Stay up-to-date with what we're doing</h2>
          <div className="newsletter-form">
            <div className="input-container">
              <input
                type="email"
                placeholder="example@email/com"
                className="newsletter-input"
              />
              <p className="error-message">Whoops, make sure it's an email</p>
            </div>
            <button className="contact-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;