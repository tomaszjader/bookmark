import React, { useEffect, useState } from 'react';
import './PopUp.css';
import IllustrationFeatures from '../../assets/images/illustration-features-tab-2.svg';
import Button from '../Button/Button';

const PopUp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isWideScreen) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 30000);

            return () => clearTimeout(timer);
        }
    }, [isWideScreen]);

    useEffect(() => {
        const handleMouseEnter = (e) => {
            if (e.clientY < 50 && isWideScreen) {
                setIsVisible(true);
            }
        };

        document.addEventListener('mousemove', handleMouseEnter);
        return () => document.removeEventListener('mousemove', handleMouseEnter);
    }, [isWideScreen]);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible || !isWideScreen) return null;

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
                        <Button variant="primary">More Info</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopUp;