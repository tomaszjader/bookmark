import React from 'react';
import './Hero.css';
import IllustrationHero from '../../assets/images/illustration-hero.svg';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>A Simple Bookmark Manager</h1>
          <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
          <div className="hero-buttons">
            <Button variant="primary">Get it on Chrome</Button>
            <Button variant="secondary">Get it on Firefox</Button>
          </div>
        </div>
        <div className="hero-image">
          <img src={IllustrationHero} alt="Hero illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;