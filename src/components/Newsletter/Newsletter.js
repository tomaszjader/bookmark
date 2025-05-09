import React, { useState, useEffect } from 'react';
import './Newsletter.css';
import Button from '../Button/Button';

const Newsletter = () => {
  const [count, setCount] = useState(35000);

  useEffect(() => {
    const duration = 20000;
    const decrementInterval = 50;
    const decrementAmount = 35000 / (duration / decrementInterval);
    
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount <= 0) {
          clearInterval(timer);
          return 0;
        }
        return Math.max(0, prevCount - decrementAmount);
      });
    }, decrementInterval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <p className="joined-text">
            {Math.round(count).toLocaleString()}+ ALREADY JOINED
          </p>
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
            <Button variant="contact">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;