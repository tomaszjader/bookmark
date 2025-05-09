import React, { useState, useEffect } from 'react';
import './Newsletter.css';
import Button from '../Button/Button';

const Newsletter = () => {
  const [count, setCount] = useState(35000);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

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

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <p className="joined-text">
            {Math.round(count).toLocaleString()}+ ALREADY JOINED
          </p>
          <h2>Stay up-to-date with what we're doing</h2>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-container">
              <input
                type="email"
                placeholder="example@email.com"
                className={`newsletter-input ${error ? 'error' : ''}`}
                value={email}
                onChange={handleEmailChange}
              />
              <p className={`error-message ${error ? 'visible' : ''}`}>
                Whoops, make sure it's an email
              </p>
            </div>
            <Button type="submit" variant="contact">Contact Us</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;