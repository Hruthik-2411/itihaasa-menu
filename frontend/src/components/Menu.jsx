import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { menuCategories } from '../data/mockData';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

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

        <div className="menu-categories-dropdown">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="menu-category-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <motion.div
                className={`category-trigger ${hoveredCategory === category.id ? 'active' : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="category-image-small">
                  <img src={category.image} alt={category.name} loading="lazy" />
                </div>
                <div className="category-info">
                  <h3 className="heading-3">{category.name}</h3>
                  <p className="caption">{category.description}</p>
                </div>
                <ChevronDown 
                  className={`chevron-icon ${hoveredCategory === category.id ? 'rotate' : ''}`} 
                  size={20} 
                />
              </motion.div>

              <AnimatePresence>
                {hoveredCategory === category.id && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="menu-items-grid">
                      {category.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="menu-item-dropdown"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                        >
                          <div className="item-header">
                            <h4 className="body-medium item-name">{item.name}</h4>
                            <div className="item-prices">
                              {item.priceSmall && (
                                <span className="item-price small">S: {item.priceSmall}</span>
                              )}
                              {item.priceLarge && (
                                <span className="item-price large">L: {item.priceLarge}</span>
                              )}
                              {item.price && (
                                <span className="item-price">{item.price}</span>
                              )}
                            </div>
                          </div>
                          {item.description && (
                            <p className="caption item-description">{item.description}</p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="menu-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a 
            href="https://www.swiggy.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order on Swiggy
          </motion.a>
          <motion.a 
            href="tel:07382638620" 
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
