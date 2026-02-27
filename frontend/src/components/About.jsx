import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/mockData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://itihaasafoods.in/assets/images/2.jpg"
              alt="ITI HA ASA Foods Interior"
              className="about-img"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-1 about-title">{aboutContent.title}</h2>
            
            <p className="body-large about-paragraph">
              {aboutContent.paragraphs[0]}
            </p>
            <p className="body-large about-paragraph">
              {aboutContent.paragraphs[1]}
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <span className="caption font-mono">SERVICES</span>
                <p className="body-small">Dine-in · Takeaway · Delivery</p>
              </div>
              <div className="feature-item">
                <span className="caption font-mono">ATMOSPHERE</span>
                <p className="body-small">Cozy · Modern · Premium</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
