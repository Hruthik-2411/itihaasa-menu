import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { menuCategories } from '../data/mockData';
import './Menu.css';

const MenuCategory = ({ category, hoveredCategory, setHoveredCategory }) => {
  const isHovered = hoveredCategory === category.id;
  
  return (
    <motion.div
      className="menu-category-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setHoveredCategory(category.id)}
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <motion.div
        className={`category-trigger ${isHovered ? 'active' : ''}`}
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
          className={`chevron-icon ${isHovered ? 'rotate' : ''}`} 
          size={20} 
        />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="dropdown-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="menu-items-grid">
              {category.items && category.items.slice(0, 20).map((item, idx) => (
                <div key={idx} className="menu-item-dropdown">
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
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Menu = () => {
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
          {menuCategories[0] && (
            <MenuCategory 
              category={menuCategories[0]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
          {menuCategories[1] && (
            <MenuCategory 
              category={menuCategories[1]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
          {menuCategories[2] && (
            <MenuCategory 
              category={menuCategories[2]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
          {menuCategories[3] && (
            <MenuCategory 
              category={menuCategories[3]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
          {menuCategories[4] && (
            <MenuCategory 
              category={menuCategories[4]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
          {menuCategories[5] && (
            <MenuCategory 
              category={menuCategories[5]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
          {menuCategories[6] && (
            <MenuCategory 
              category={menuCategories[6]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
          {menuCategories[7] && (
            <MenuCategory 
              category={menuCategories[7]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
          {menuCategories[8] && (
            <MenuCategory 
              category={menuCategories[8]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
          {menuCategories[9] && (
            <MenuCategory 
              category={menuCategories[9]} 
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          )}
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
