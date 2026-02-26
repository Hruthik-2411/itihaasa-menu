import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

// Simplified animation variants for better performance
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserve = () => {
    // Redirect to Swiggy Dineout for table reservation
    window.open('https://www.swiggy.com/dineout', '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-content container">
        <motion.div 
          className="hero-announcement"
          {...fadeIn}
        >
          <span className="caption font-mono">Rated 4.3 ⭐ • 1,123 Reviews</span>
        </motion.div>
        
        <motion.h1 
          className="heading-hero hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Where Every Cup<br />Tells a Story
        </motion.h1>
        
        <motion.p 
          className="body-large hero-subtitle"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          Experience the perfect blend of quality coffee, cozy ambience, 
          and warm hospitality at Visakhapatnam's favorite food destination
        </motion.p>

        <motion.div 
          className="hero-cta"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
        >
          <button 
            onClick={handleReserve} 
            className="btn-primary"
          >
            Reserve a Table
          </button>
          <button 
            onClick={scrollToMenu} 
            className="btn-secondary"
          >
            Explore Menu <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
          </button>
        </motion.div>

        <motion.div 
          className="hero-info"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
        >
          <div className="info-item">
            <span className="caption font-mono">HOURS</span>
            <p className="body-small">Open Daily · Closes 11 PM</p>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <span className="caption font-mono">PRICE RANGE</span>
            <p className="body-small">₹200 - ₹400 per person</p>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <span className="caption font-mono">LOCATION</span>
            <p className="body-small">Vishalakshi Nagar, Vizag</p>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-image-overlay"></div>
    </section>
  );
};

export default React.memo(Hero);
