# 🎨 Framer Motion Animation Guide for Bean Board

This guide will help you add beautiful animations to your Bean Board café website using Framer Motion.

## 📦 Installation (Already Done)

```bash
yarn add framer-motion
```

---

## 🎯 Basic Concepts

### 1. **Import Motion**
```jsx
import { motion } from 'framer-motion';
```

### 2. **Convert Any Element to Motion**
Replace any HTML element with `motion.element`:
```jsx
// Before
<div className="card">Content</div>

// After
<motion.div className="card">Content</motion.div>
```

---

## 🌟 Common Animation Patterns

### **1. Fade In Animation**
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

### **2. Slide Up Animation**
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Your content
</motion.div>
```

### **3. Scale Animation**
```jsx
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### **4. Slide from Left/Right**
```jsx
// From Left
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Left content
</motion.div>

// From Right
<motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Right content
</motion.div>
```

---

## 🎭 Scroll-Based Animations (Viewport)

Trigger animations when elements come into view:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  Appears when scrolled into view
</motion.div>
```

**Parameters:**
- `viewport={{ once: true }}` - Animates only once
- `viewport={{ amount: 0.3 }}` - Triggers when 30% visible

---

## 🖱️ Hover & Tap Effects

### **Hover Scale**
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="btn-primary"
>
  Reserve Table
</motion.button>
```

### **Hover with Shadow**
```jsx
<motion.div
  whileHover={{ 
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
  }}
  transition={{ duration: 0.3 }}
>
  Card content
</motion.div>
```

---

## 🔄 List Animations (Stagger Effect)

Animate items in a list one by one:

```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Usage:
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
>
  {items.map((item, i) => (
    <motion.div key={i} variants={item}>
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

---

## 🎬 AnimatePresence (Exit Animations)

For elements that mount/unmount (like modals, menu switches):

```jsx
import { motion, AnimatePresence } from 'framer-motion';

<AnimatePresence mode="wait">
  <motion.div
    key={currentTab}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
  >
    Tab content
  </motion.div>
</AnimatePresence>
```

---

## 🎨 Easing Functions

Control animation smoothness:

```jsx
transition={{ 
  duration: 0.6,
  ease: "easeOut"  // Options: "easeIn", "easeOut", "easeInOut", "linear"
}}

// Or custom cubic bezier:
transition={{ 
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96]
}}
```

---

## 💡 Real Examples from Your Website

### **Example 1: Hero Title Animation**
```jsx
<motion.h1 
  className="heading-hero"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
>
  Where Every Cup Tells a Story
</motion.h1>
```

### **Example 2: Menu Item Hover**
```jsx
<motion.div 
  className="menu-item"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ y: -4 }}
  transition={{ duration: 0.3 }}
>
  Menu content
</motion.div>
```

### **Example 3: Gallery Images Stagger**
```jsx
{images.map((img, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
  >
    <img src={img} alt="Gallery" />
  </motion.div>
))}
```

---

## 🎯 Quick Tips

1. **Keep animations subtle** - 0.3s to 0.8s duration is ideal
2. **Use `whileInView`** for scroll animations
3. **Add delays** to create sequence: `delay: 0.2, 0.4, 0.6`
4. **Use `once: true`** to prevent re-animation on scroll
5. **Combine transforms** - opacity + y/x + scale for depth

---

## 🚀 How to Add Animations to New Sections

### Step 1: Import motion
```jsx
import { motion } from 'framer-motion';
```

### Step 2: Replace element
```jsx
// Before
<div className="my-section">

// After
<motion.div className="my-section">
```

### Step 3: Add animation props
```jsx
<motion.div 
  className="my-section"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

---

## 📚 More Resources

- **Official Docs**: https://www.framer.com/motion/
- **Examples**: https://www.framer.com/motion/examples/

---

## 🎨 Animation Ideas for Bean Board

1. **Floating Coffee Steam** - Subtle y-axis movement
2. **Parallax Scroll** - Different scroll speeds for layers
3. **Number Counter** - Animate review count
4. **Image Reveal** - Slide/fade images on scroll
5. **Button Shine Effect** - Gradient animation on hover

---

Happy Animating! ☕✨
