import React, { useEffect, useState } from 'react';
import './PopUp.css';
import IllustrationFeatures from '../../assets/images/illustration-features-tab-2.svg';

const PopUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseEnter = (e) => {
            if (e.clientY < 50) {
                setIsVisible(true);
            }
        };

        document.addEventListener('mousemove', handleMouseEnter);
        return () => document.removeEventListener('mousemove', handleMouseEnter);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-header">
                    <button className="popup-close" onClick={handleClose}>×</button>
                </div>
                <div className="popup-body">
                    <div className="popup-illustration">
                        <img
                            src={IllustrationFeatures}
                            alt="Ilustracja wyszukiwania"
                            className="popup-image"
                        />
                    </div>
                    <div className="popup-text">

                        <h2>Intelligent search</h2>
                        <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <button className="more-info-btn">More Info</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopUp;