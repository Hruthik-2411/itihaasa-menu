// Mock data for ITHI HA ASA Foods Website

export const cafeInfo = {
  name: "ITI HA ASA Foods",
  tagline: "Where Every Cup Tells a Story",
  rating: 4.3,
  reviews: 1123,
  priceRange: "₹80 - ₹360",
  phone: "+91 89775 31113",
  email: "info.itihasafoods@gmail.com",
  whatsapp: "918977531113",
  address: {
    line1: "Plot no: 396, Alluri Sitarama Raju Marg",
    line2: "Vishalakshi Nagar",
    line3: "Visakhapatnam, AP 530043",
    state: "India"
  },
  hours: "Open Daily · 8:00 AM - 11:00 PM",
  services: ["Dine-in", "Takeaway", "No-contact delivery"],
  swiggyLink: "https://www.swiggy.com/dineout",
  googleMapsLink: "https://maps.google.com/?q=17.7397,83.3145",
  images: {
    hero: "https://itihaasafoods.in/assets/images/r3.jpg",
    about: "https://itihaasafoods.in/assets/images/2.jpg",
    gallery: [
      "https://itihaasafoods.in/assets/images/r2.jpg",
      "https://itihaasafoods.in/assets/images/r7.jpg",
      "https://itihaasafoods.in/assets/images/5.jpg",
      "https://itihaasafoods.in/assets/images/NZ6_0660.jpg",
      "https://itihaasafoods.in/assets/images/@Bean%20Board_Vishalakshi%20Nagar.jpeg",
      "https://itihaasafoods.in/assets/images/NZ6_0641.jpeg"
    ],
    signature: {
      bean: "https://itihaasafoods.in/assets/images/05-Perfect-Cup-Everytime.jpeg",
      brew: "https://itihaasafoods.in/assets/images/NZ6_0598.jpg",
      cup: "https://itihaasafoods.in/assets/images/444.jpg",
      moment: "https://itihaasafoods.in/assets/images/445.jpg"
    }
  }
};

export const menuCategories = [
  {
    id: "coffee",
    name: "Coffee Menu",
    description: "Handcrafted espresso-based beverages",
    icon: "☕",
    items: [
             
             { name: "Americano", priceSmall: "₹130", priceLarge: "₹160", description: "Bold & robust" },
             { name: "Cafe Latte", priceSmall: "₹150", priceLarge: "₹200", description: "Silky smooth milk & espresso" },
             { name: "Cappuccino", priceSmall: "₹150", priceLarge: "₹200", description: "Classic Italian perfection" },
             { name: "Cafe Mocha", priceSmall: "₹200", priceLarge: "₹230", description: "Chocolate meets coffee" },
             { name: "Caramel Macchiato", priceSmall: "₹200", priceLarge: "₹250", description: "Sweet caramel layers" },
             { name: "BB Signature", priceSmall: "₹160", priceLarge: "₹190", description: "Our special blend" },
             { name: "Belgian Hot Chocolate", priceSmall: "₹250", priceLarge: "₹360", description: "Rich Belgian chocolate" },
             { name: "Marble Mocha", priceSmall: "₹220", priceLarge: "₹290", description: "Swirled perfection" },
             { name: "Brewed Coffee Jar", priceSmall: "₹260", priceLarge: "₹350", description: "Fresh brewed" },
             { name: "Latte", priceSmall: "₹160", priceLarge: "₹200", description: "Smooth milk coffee" },
             { name: "Cortado", price: "₹160", description: "Espresso with milk" },
             { name: "Small Coffee", price: "₹120", description: "Regular small coffee" }
      ]
  },
  {
    id: "frappe",
name: "Cream Frappe",
description: "Indulgent blended drinks",
icon: "🥤",
items: [
  { name: "Black Current Cream", price: "₹180" },
  { name: "Blueberry Chocolate", price: "₹190" },
  { name: "Blueberry Cream", price: "₹180" },
  { name: "Chocolate Chip", price: "₹200" },
  { name: "Chocolate Frappe", price: "₹180" },
  { name: "Raspberry Chocolate", price: "₹200" },
  { name: "Strawberry Chocolate", price: "₹200" },
  { name: "Strawberry Cream", price: "₹180" },
  { name: "White Chocolate", price: "₹180" }
]
  },
  {
   id: "cozy",
name: "Cozy Sips",
description: "Warm beverages",
icon: "☕",
items: [
  { name: "Affogato", price: "₹180" },
  { name: "Coffee Frappe", price: "₹180" },
  { name: "Flavoured Steamer", price: "₹160" },
  { name: "Frappogato", price: "₹250" },
  { name: "Iced Americano", price: "₹160" },
  { name: "Iced Latte", price: "₹190" },
  { name: "Iced Mocha", price: "₹200" },
  { name: "Mocha Frappe", price: "₹200" },
  { name: "Vietnamese Cold Brew", price: "₹190" }
]
  },
  {
    id: "icedtea",
name: "Iced Teas",
description: "Refreshing flavored teas",
icon: "🍹",
items: [
  { name: "Apple Mint", price: "₹150" },
  { name: "Black Currant", price: "₹150" },
  { name: "Black Kiwi", price: "₹150" },
  { name: "Blue Curacao", price: "₹150" },
  { name: "Blueberry", price: "₹150" },
  { name: "Ginger Mint", price: "₹150" },
  { name: "Green Apple", price: "₹150" },
  { name: "Kiwi", price: "₹150" },
  { name: "Kiwi Mint", price: "₹150" },
  { name: "Lime", price: "₹150" },
  { name: "Lime Mint", price: "₹150" },
  { name: "Orange", price: "₹150" },
  { name: "Peach", price: "₹160" },
  { name: "Ramwara", price: "₹175" },
  { name: "Raspberry", price: "₹150" },
  { name: "Raspberry Mint", price: "₹150" },
  { name: "Rio", price: "₹150" },
  { name: "Strawberry", price: "₹150" },
  { name: "Watermelon", price: "₹160" }
]
  },
  {
    id: "hottea",
    name: "Hot Teas",
    description: "Traditional tea",
    icon: "🍵",
    items: [
             { name: "Black Tea", price: "₹80" },
             { name: "Earl Grey", price: "₹100" },
             { name: "Ginger Tea", price: "₹100" },
             { name: "Green Tea", price: "₹100" },
             { name: "Hyderabad Tea", price: "₹120" },
            { name: "Kolkata Street Tea", price: "₹120" },
            { name: "Lemon Tea", price: "₹120" },
            { name: "Masala Tea", price: "₹100" },
            { name: "Moroccan Mint", price: "₹100" },
            { name: "Orthodox Slim Tea", price: "₹100" },
             { name: "Rajasthan Tea", price: "₹120" }
          ]
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    description: "Freshly made",
    icon: "🥪",
    items: [
  { name: "Italian Paneer Sandwich", price: "₹180" },
  { name: "Spinach Sandwich", price: "₹180" },
  { name: "Tandoori Sandwich", price: "₹180" },
  { name: "Chicken Tikka Sandwich", price: "₹190" },
  { name: "Fiery Chicken Sandwich", price: "₹190" },
  { name: "Mexican Grill Sandwich", price: "₹200" },
  { name: "Grilled Chicken Sandwich", price: "₹200" },
  { name: "Egg Toast", price: "₹200" }
]
  },
  {
    id: "rolls",
name: "Rolls & Fries",
description: "Quick bites",
icon: "🌯",
items: [
  { name: "Smoked Chicken Roll", price: "₹210" },
  { name: "Tandoori Chicken Roll", price: "₹210" },
  { name: "Chicken Tikka Roll", price: "₹230" },
  { name: "Paneer Roll", price: "₹190" },
  { name: "Veg Roll", price: "₹200" },
  { name: "French Fries", price: "₹210" },
  { name: "Potato Garlic Poppers", price: "₹200" },
  { name: "Hash Browns", price: "₹190" }
]
  },
  {
    id: "pizza",
    name: "Pizza & Burger",
    description: "Italian favorites",
    icon: "🍕",
   items: [
  { name: "Veg Paradise Pizza", price: "₹280" },
  { name: "Veg Supreme Pizza", price: "₹270" },
  { name: "Corn Cheese Pizza", price: "₹290" },
  { name: "Paneer Pizza", price: "₹270" },
  { name: "Chicken Supreme Pizza", price: "₹340" },
  { name: "Chicken Tikka Pizza", price: "₹320" },
  { name: "Veg Burger", price: "₹170" },
  { name: "Chicken Burger", price: "₹180" },
  { name: "Veg Bruschetta", price: "₹190" },
  { name: "Chicken Bruschetta", price: "₹210" },
  { name: "Cheese Bruschetta", price: "₹180" }
]
  },
  {
    id: "pastries",
    name: "Pastries & Cakes",
    description: "Sweet treats",
    icon: "🍰",
    items: [
  { name: "Apple Cake", price: "₹130" },
  { name: "Banana Pound Cake", price: "₹100" },
  { name: "Blueberry Cake", price: "₹110" },
  { name: "Blueberry Cheese Cake", price: "₹160" },
  { name: "Blueberry Pastry", price: "₹160" },
  { name: "Brownie with Ice Cream", price: "₹180" },
  { name: "Butter Pound Cake", price: "₹110" },
  { name: "Carrot Cake", price: "₹150" },
  { name: "Cheese Cake", price: "₹150" },
  { name: "Chocolate Crunch", price: "₹130" },
  { name: "Chocolate Truffle", price: "₹160" },
  { name: "Cinnamon Roll", price: "₹130" },
  { name: "Eggless Chocolate Pastry", price: "₹170" },
  { name: "Ferrero Rocher", price: "₹200" },
  { name: "Fully Loaded Brownie", price: "₹120" },
  { name: "Hazelnut Pastry", price: "₹170" },
  { name: "Melting Brownie", price: "₹100" },
  { name: "Mocha Crunch", price: "₹130" },
  { name: "Mocha Pastry", price: "₹150" },
  { name: "Red Velvet Cake", price: "₹150" },
  { name: "Rocky Road Pastry", price: "₹180" },
  { name: "Tiramisu", price: "₹170" },
  { name: "Chocoship Banana Cake", price: "₹110" },

]
  },
  {
    id: "milkshakes",
    name: "Shakes & Desserts",
    description: "Decadent treats",
    icon: "🥛",
    items: [
  { name: "Oreo Shake", price: "₹210" },
  { name: "Kit-Kat Shake", price: "₹220" },
  { name: "Nutella Shake", price: "₹240" },
  { name: "Brownie Fudge Shake", price: "₹240" },
  { name: "Melting Brownie", price: "₹100" },
  { name: "Nutella Bombolone", price: "₹160" },
  { name: "Chocolate Mousse", price: "₹180" }
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
    "Welcome to ITI HA ASA Foods, where coffee isn't just a drink—it's an experience. Located in the heart of Visakhapatnam, we've created a space that celebrates quality, comfort, and community.",
    "Every bean is carefully selected, every brew meticulously crafted, and every moment designed to make you feel at home. Whether you're here for a quick espresso or a long conversation over lattes, we're here to make it memorable."
  ]
};

export const signatureExperience = [
  {
    step: "Bean",
    title: "Sourced with Care",
    description: "We select only the finest arabica beans from sustainable farms",
    image: "https://itihaasafoods.in/assets/images/05-Perfect-Cup-Everytime.jpeg"
  },
  {
    step: "Brew",
    title: "Crafted with Precision",
    description: "Our baristas master every brewing method to perfection",
    image: "https://itihaasafoods.in/assets/images/NZ6_0598.jpg"
  },
  {
    step: "Cup",
    title: "Served with Art",
    description: "Each cup is a canvas for our latte artistry",
    image: "https://itihaasafoods.in/assets/images/444.jpg"
  },
  {
    step: "Moment",
    title: "Enjoyed with Joy",
    description: "Your perfect coffee moment, crafted just for you",
    image: "https://itihaasafoods.in/assets/images/445.jpg"
  }
];
