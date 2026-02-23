import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { menuCategories } from '../data/mockData';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const activeMenu = menuCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <motion.div 
          className="menu-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-1">Our Menu</h2>
          <p className="body-large menu-subtitle">
            Handcrafted with care, served with love
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="menu-tabs">
          <div className="tabs-scroll">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`tab-button ${activeCategory === category.id ? 'active' : ''}`}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content */}
        <motion.div
          key={activeCategory}
          className="menu-content-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="menu-category-header">
            <h3 className="heading-2">{activeMenu.name}</h3>
            <p className="body-medium">{activeMenu.description}</p>
          </div>

          <div className="menu-items-compact">
            {activeMenu.items.map((item, index) => (
              <motion.div
                key={index}
                className="menu-item-compact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <div className="item-info">
                  <h4 className="item-name-compact">{item.name}</h4>
                  {item.description && (
                    <p className="item-desc-compact">{item.description}</p>
                  )}
                </div>
                <div className="item-pricing">
                  {item.priceSmall && item.priceLarge ? (
                    <>
                      <span className="price-tag small">S {item.priceSmall}</span>
                      <span className="price-tag large">L {item.priceLarge}</span>
                    </>
                  ) : (
                    <span className="price-tag">{item.price}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="menu-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a 
            href="https://www.swiggy.com/dineout" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve a Table
          </motion.a>
          <motion.a 
            href="tel:+918977531113" 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call to Order
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
