// Mock data for ITHI HA ASA Foods Website

export const cafeInfo = {
  name: "ITHI HA ASA Foods",
  teluguName: "బీన్ బోర్డు – సీతమ్మధార",
  tagline: "Where Every Cup Tells a Story",
  rating: 4.3,
  reviews: 1123,
  priceRange: "₹80 - ₹360",
  phone: "07382638620",
  whatsapp: "917382638620",
  address: {
    line1: "Seetammadhara",
    line2: "Visakhapatnam",
    line3: "Andhra Pradesh",
    state: "India"
  },
  hours: "Open Daily · Closes at 11:00 PM",
  services: ["Dine-in", "Takeaway", "No-contact delivery"],
  swiggyLink: "https://www.swiggy.com",
  googleMapsLink: "https://maps.google.com/?q=17.741453,83.30474",
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
    image: "https://itihaasafoods.in/assets/images/444.jpg",
    items: [
      { name: "Espresso", priceSmall: "₹90", priceLarge: "₹120", description: "Pure coffee essence" },
      { name: "Americano", priceSmall: "₹110", priceLarge: "₹140", description: "Bold & robust" },
      { name: "Cafe Latte", priceSmall: "₹130", priceLarge: "₹180", description: "Silky smooth milk & espresso" },
      { name: "Cappuccino", priceSmall: "₹130", priceLarge: "₹180", description: "Classic Italian perfection" },
      { name: "Cafe Mocha", priceSmall: "₹170", priceLarge: "₹230", description: "Chocolate meets coffee" },
      { name: "Caramel Macchiato", priceSmall: "₹170", priceLarge: "₹230", description: "Sweet caramel layers" },
      { name: "Bean Board Signature", priceSmall: "₹150", priceLarge: "₹190", description: "Our special blend" },
      { name: "Belgian Hot Chocolate", priceSmall: "₹210", priceLarge: "₹360", description: "Rich Belgian chocolate" },
      { name: "Marble Mocha", priceSmall: "₹190", priceLarge: "₹290", description: "Swirled perfection" },
      { name: "Brewed Coffee Jar", priceSmall: "₹190", priceLarge: "₹340", description: "Fresh brewed" },
      { name: "Cortado", price: "₹110", description: "Espresso with milk" }
    ]
  },
  {
    id: "frappe",
    name: "Cream Based Frappe",
    description: "Indulgent blended drinks",
    image: "https://itihaasafoods.in/assets/images/445.jpg",
    items: [
      { name: "Chocolate Chip", price: "₹160", description: "Creamy chocolate chips" },
      { name: "White Chocolate", price: "₹160", description: "Smooth white chocolate" },
      { name: "Raspberry Chocolate", price: "₹190", description: "Berry meets chocolate" },
      { name: "Strawberry Chocolate", price: "₹190", description: "Fresh strawberry twist" },
      { name: "Blueberry Chocolate", price: "₹190", description: "Blueberry delight" },
      { name: "Blueberry Cream", price: "₹160", description: "Pure blueberry cream" },
      { name: "Strawberry Cream", price: "₹160", description: "Fresh strawberry cream" },
      { name: "Black Current Cream", price: "₹160", description: "Tangy black currant" }
    ]
  },
  {
    id: "cozy",
    name: "Cozy Sips",
    description: "Warm and comforting beverages",
    image: "https://itihaasafoods.in/assets/images/NZ6_0598.jpg",
    items: [
      { name: "Flavoured Steamer", price: "₹160", description: "Warm flavored milk" },
      { name: "Hot Chocolate", price: "₹180", description: "Classic hot chocolate" },
      { name: "Coffee Frappe", price: "₹160", description: "Iced coffee bliss" },
      { name: "Mocha Frappe", price: "₹190", description: "Chocolate coffee blend" },
      { name: "Affogato", price: "₹160", description: "Ice cream meets espresso" },
      { name: "Frappogato", price: "₹250", description: "Premium frozen treat" },
      { name: "Iced Americano", price: "₹130", description: "Chilled bold coffee" },
      { name: "Iced Latte", price: "₹180", description: "Cold smooth latte" },
      { name: "Iced Mocha", price: "₹190", description: "Cold chocolate coffee" }
    ]
  },
  {
    id: "icedtea",
    name: "Iced Teas",
    description: "Refreshing flavored teas",
    image: "https://itihaasafoods.in/assets/images/446.jpg",
    items: [
      { name: "Blueberry", price: "₹130" },
      { name: "Raspberry / Raspberry Mint", price: "₹130" },
      { name: "Lime Mint / Ginger Mint", price: "₹130" },
      { name: "Orange", price: "₹130" },
      { name: "Blue Curacao", price: "₹130" },
      { name: "Green Apple / Apple", price: "₹130" },
      { name: "Black Current", price: "₹130" },
      { name: "Kiwi / Kiwi Mint / Black Kiwi", price: "₹130" },
      { name: "Strawberry", price: "₹130" },
      { name: "Peach / Rio", price: "₹130" },
      { name: "Lime / Ramwara", price: "₹130" },
      { name: "Watermelon", price: "₹130" }
    ]
  },
  {
    id: "hottea",
    name: "Hot Teas",
    description: "Traditional tea selection",
    image: "https://itihaasafoods.in/assets/images/NZ6_0660.jpg",
    items: [
      { name: "Black Tea", price: "₹80" },
      { name: "Green Tea", price: "₹80" },
      { name: "Green Mint", price: "₹80" },
      { name: "Earl Grey", price: "₹80" },
      { name: "Masala Tea", price: "₹80" },
      { name: "Lemon Tea", price: "₹80" }
    ]
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    description: "Freshly made sandwiches",
    image: "https://itihaasafoods.in/assets/images/r2.jpg",
    items: [
      { name: "Paneer Sandwich", price: "₹170", description: "Grilled paneer delight" },
      { name: "Spinach Sandwich", price: "₹180", description: "Healthy & tasty" },
      { name: "Chicken Tikka Sandwich", price: "₹190", description: "Spicy tikka filling" },
      { name: "Fiery Sandwich", price: "₹180", description: "Hot & spicy" },
      { name: "Tandoori Sandwich", price: "₹180", description: "Tandoori flavored" },
      { name: "Grilled Chicken Sandwich", price: "₹190", description: "Classic grilled chicken" },
      { name: "Cheese Chicken Sandwich", price: "₹190", description: "Cheesy chicken goodness" }
    ]
  },
  {
    id: "rolls",
    name: "Rolls & Fries",
    description: "Quick bites and sides",
    image: "https://itihaasafoods.in/assets/images/r7.jpg",
    items: [
      { name: "Smoked Roll", price: "₹180", description: "Smoky flavors" },
      { name: "Tandoori Roll", price: "₹180", description: "Tandoori spiced" },
      { name: "Paneer Roll", price: "₹150", description: "Paneer wrap" },
      { name: "French Fries", price: "₹160", description: "Crispy golden fries" },
      { name: "Potato Garlic Poppers", price: "₹150", description: "Garlic-infused" },
      { name: "Hash Browns", price: "₹190", description: "Crispy potato patties" }
    ]
  },
  {
    id: "pizza",
    name: "Pizza, Burger & Bruschetta",
    description: "Italian favorites",
    image: "https://itihaasafoods.in/assets/images/5.jpg",
    items: [
      { name: "Veg Paradise Pizza", price: "₹220", description: "Loaded vegetables" },
      { name: "Corn Cheese Pizza", price: "₹220", description: "Sweet corn & cheese" },
      { name: "Paneer Pizza", price: "₹220", description: "Paneer perfection" },
      { name: "Chicken Supreme Pizza", price: "₹250", description: "Loaded chicken" },
      { name: "Chicken Tikka Pizza", price: "₹250", description: "Tikka flavored" },
      { name: "Supreme Special Pizza", price: "₹250", description: "Everything pizza" },
      { name: "Veg Burger", price: "₹150", description: "Veggie patty" },
      { name: "Chicken Burger", price: "₹180", description: "Juicy chicken" },
      { name: "Veg Bruschetta", price: "₹150", description: "Toasted Italian bread" },
      { name: "Chicken Bruschetta", price: "₹180", description: "Chicken topped" }
    ]
  },
  {
    id: "pastries",
    name: "Pastries & Cakes",
    description: "Sweet treats",
    image: "https://itihaasafoods.in/assets/images/NZ6_0641.jpeg",
    items: [
      { name: "Mocha Pastry", price: "₹140" },
      { name: "Blueberry Pastry", price: "₹140" },
      { name: "Hazelnut Pastry", price: "₹140" },
      { name: "Rocky Road Pastry", price: "₹140" },
      { name: "Eggless Chocolate Pastry", price: "₹120" },
      { name: "Banana / Blueberry / Butter Cake", price: "₹90" },
      { name: "Apple / Carrot Cake", price: "₹120" },
      { name: "Cheese Cake", price: "₹150" },
      { name: "Cinnamon Roll / Brownie", price: "₹100" },
      { name: "Brownie with Ice Cream", price: "₹160" },
      { name: "Mocha Crunch", price: "₹120" },
      { name: "Red Velvet Cake", price: "₹150" }
    ]
  },
  {
    id: "milkshakes",
    name: "Milkshakes & Desserts",
    description: "Decadent desserts",
    image: "https://itihaasafoods.in/assets/images/05-Perfect-Cup-Everytime.jpeg",
    items: [
      { name: "Oreo Shake", price: "₹210", description: "Crushed Oreo bliss" },
      { name: "Kit-Kat Shake", price: "₹210", description: "Chocolate wafer shake" },
      { name: "Brownie Fudge Shake", price: "₹240", description: "Rich brownie shake" },
      { name: "Melting Brownie", price: "₹90", description: "Warm gooey center" },
      { name: "Nutella Bombolone", price: "₹160", description: "Nutella-filled donut" },
      { name: "Chocolate Mousse", price: "₹180", description: "Smooth chocolate" }
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
    "Welcome to ITHI HA ASA Foods, where coffee isn't just a drink—it's an experience. Nestled in the heart of Seetammadhara, we've created a space that celebrates quality, comfort, and community.",
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
