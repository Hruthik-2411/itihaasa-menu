// Mock data for Bean Board Café Website

export const cafeInfo = {
  name: "Bean Board",
  teluguName: "బీన్ బోర్డు – సీతమ్మధార",
  tagline: "Where Every Cup Tells a Story",
  rating: 4.3,
  reviews: 1123,
  priceRange: "₹200 - ₹400",
  phone: "07382638620",
  whatsapp: "917382638620",
  address: {
    line1: "P8R3+JW4, 49-54-3/16, BS Layout Rd",
    line2: "North Extension, Balayya Sastri Layout",
    line3: "Seethammadara, Visakhapatnam",
    state: "Andhra Pradesh - 530013"
  },
  hours: "Open Daily · Closes at 11:00 PM",
  services: ["Dine-in", "Takeaway", "No-contact delivery"],
  swiggyLink: "https://www.swiggy.com",
  googleMapsLink: "https://maps.google.com/?q=17.741453,83.30474",
  images: {
    hero: "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
    about: "https://images.unsplash.com/photo-1572231086568-6984943e6629",
    gallery: [
      "https://images.unsplash.com/photo-1598959652545-c0230cdbb01f",
      "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg",
      "https://images.pexels.com/photos/17607975/pexels-photo-17607975.jpeg",
      "https://images.unsplash.com/photo-1744135459107-ec1f89781cf3",
      "https://images.unsplash.com/photo-1757918391899-1341f7b285fb",
      "https://images.unsplash.com/photo-1545418314-7ce0b9b53901"
    ],
    signature: {
      bean: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308",
      brew: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a",
      cup: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9",
      moment: "https://images.unsplash.com/photo-1497636577773-f1231844b336"
    }
  }
};

export const menuCategories = [
  {
    id: "coffee",
    name: "Coffee",
    description: "Handcrafted with precision",
    image: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9",
    items: [
      { name: "Cappuccino", price: "₹180", description: "Classic Italian perfection" },
      { name: "Cold Brew", price: "₹220", description: "Smooth & refreshing" },
      { name: "Espresso", price: "₹150", description: "Pure coffee essence" },
      { name: "Latte", price: "₹200", description: "Silky smooth milk & espresso" },
      { name: "Mocha", price: "₹240", description: "Chocolate meets coffee" },
      { name: "Americano", price: "₹160", description: "Bold & robust" }
    ]
  },
  {
    id: "snacks",
    name: "Snacks",
    description: "Perfect café companions",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336",
    items: [
      { name: "Croissant", price: "₹120", description: "Buttery French classic" },
      { name: "Sandwich Club", price: "₹280", description: "Triple decker delight" },
      { name: "Panini", price: "₹240", description: "Grilled to perfection" },
      { name: "Nachos", price: "₹220", description: "Loaded with cheese" },
      { name: "Bruschetta", price: "₹200", description: "Italian appetizer" },
      { name: "Garlic Bread", price: "₹150", description: "Crispy & aromatic" }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet endings",
    image: "https://images.unsplash.com/photo-1579265898841-79c7890d69cf",
    items: [
      { name: "Tiramisu", price: "₹280", description: "Coffee-soaked layers" },
      { name: "Brownie", price: "₹180", description: "Warm chocolate fudge" },
      { name: "Cheesecake", price: "₹260", description: "New York style" },
      { name: "Waffle", price: "₹220", description: "Belgian with toppings" },
      { name: "Pancakes", price: "₹200", description: "Fluffy stack of three" },
      { name: "Cookie Platter", price: "₹150", description: "Assorted freshly baked" }
    ]
  },
  {
    id: "combos",
    name: "Combos",
    description: "Value & variety",
    image: "https://images.pexels.com/photos/28052358/pexels-photo-28052358.jpeg",
    items: [
      { name: "Coffee + Croissant", price: "₹280", description: "Perfect morning start" },
      { name: "Latte + Brownie", price: "₹380", description: "Sweet coffee treat" },
      { name: "Sandwich + Cold Brew", price: "₹450", description: "Lunch special" },
      { name: "Espresso + Tiramisu", price: "₹400", description: "Italian duo" }
    ]
  }
];

export const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best coffee in Vizag! The ambience is perfect for working or catching up with friends.",
    date: "2 weeks ago"
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Amazing food and excellent service. The cold brew is a must-try!",
    date: "1 month ago"
  },
  {
    name: "Sneha Reddy",
    rating: 4,
    text: "Cozy place with great coffee. Love spending my evenings here.",
    date: "3 weeks ago"
  },
  {
    name: "Aditya Rao",
    rating: 5,
    text: "The panini and cappuccino combo is my favorite. Highly recommended!",
    date: "1 week ago"
  }
];

export const aboutContent = {
  title: "Crafting Moments, One Cup at a Time",
  paragraphs: [
    "Welcome to Bean Board, where coffee isn't just a drink—it's an experience. Nestled in the heart of Seetammadhara, we've created a space that celebrates quality, comfort, and community.",
    "Every bean is carefully selected, every brew meticulously crafted, and every moment designed to make you feel at home. Whether you're here for a quick espresso or a long conversation over lattes, we're here to make it memorable."
  ]
};

export const signatureExperience = [
  {
    step: "Bean",
    title: "Sourced with Care",
    description: "We select only the finest arabica beans from sustainable farms",
    image: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308"
  },
  {
    step: "Brew",
    title: "Crafted with Precision",
    description: "Our baristas master every brewing method to perfection",
    image: "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a"
  },
  {
    step: "Cup",
    title: "Served with Art",
    description: "Each cup is a canvas for our latte artistry",
    image: "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9"
  },
  {
    step: "Moment",
    title: "Enjoyed with Joy",
    description: "Your perfect coffee moment, crafted just for you",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336"
  }
];
