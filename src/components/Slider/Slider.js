import React, { useState } from 'react';
import './Slider.css';
import IllustrationFeatures1 from '../../assets/images/illustration-features-tab-1.svg';
import IllustrationFeatures2 from '../../assets/images/illustration-features-tab-2.svg';
import IllustrationFeatures3 from '../../assets/images/illustration-features-tab-3.svg';
import Button from '../Button/Button';

const Slider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      lead:"Simple Bookmarking",
      title: 'Bookmark in one click',
      description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
      image: IllustrationFeatures1
    },
    {
      lead:"Speed Searching",
      title: 'Intelligent search',
      description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
      image: IllustrationFeatures2
    },
    {
      lead:"Easy Sharing",
      title: 'Share your bookmarks',
      description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      image: IllustrationFeatures3
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Features</h2>
          <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        
        <div className="features-tabs">
          {features.map((feature, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {feature.lead}
            </button>
          ))}
        </div>

        <div className="feature-content">
          <div className="feature-image">
            <img src={features[activeTab].image} alt={features[activeTab].title} />
          </div>
          <div className="feature-text">
            <h3>{features[activeTab].title}</h3>
            <p>{features[activeTab].description}</p>
            <Button variant="primary">More Info</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;