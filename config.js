/**
 * Navis Slate Configuration
 * Update this file with your business information
 */

const CONFIG = {
  // Business Information
  businessName: 'Navis Slate',
  businessEmail: 'support@navisslate.com',
  businessPhone: '+91 1800-SLATE-01',
  businessLocation: 'Jaipur, India',
  
  // WhatsApp Configuration
  whatsapp: {
    phoneNumber: '919876543210', // Country code + Number without +
    message: 'Hi! I\'m interested in your travel services.' // Default message
  },
  
  // Pricing Configuration
  pricing: {
    baseFare: 12400,
    tax: 2232,
    currency: '₹',
    perKm: true
  },
  
  // Popular Routes
  routes: [
    { from: 'Delhi', to: 'Agra', price: 2499 },
    { from: 'Jaipur', to: 'Delhi', price: 3199 },
    { from: 'Mumbai', to: 'Pune', price: 1899 },
    { from: 'Bangalore', to: 'Coorg', price: 4599 },
    { from: 'Delhi', to: 'Rishikesh', price: 2899 },
    { from: 'Pune', to: 'Goa', price: 8999 }
  ],
  
  // Vehicle Information
  vehicles: [
    {
      id: 1,
      name: 'Maruti Dzire',
      type: 'Sedan',
      seats: 4,
      pricePerKm: 12,
      image: 'https://via.placeholder.com/400x300?text=Maruti+Dzire',
      badge: 'Most Popular'
    },
    {
      id: 2,
      name: 'Toyota Innova Crysta',
      type: 'SUV',
      seats: 7,
      pricePerKm: 15,
      image: 'https://via.placeholder.com/400x300?text=Innova+Crysta',
      badge: 'Best for Groups'
    },
    {
      id: 3,
      name: 'Slate Executive S',
      type: 'Luxury Sedan',
      seats: 4,
      pricePerKm: 35,
      image: 'https://via.placeholder.com/400x300?text=Executive+S',
      badge: 'Verified'
    },
    {
      id: 4,
      name: 'Horizon Transit',
      type: 'Van',
      seats: 12,
      pricePerKm: 18,
      image: 'https://via.placeholder.com/400x300?text=Horizon+Transit',
      badge: 'Popular'
    }
  ],
  
  // Social Media Links
  social: {
    whatsapp: 'https://wa.me/919876543210',
    instagram: 'https://instagram.com/navisslate',
    facebook: 'https://facebook.com/navisslate',
    twitter: 'https://twitter.com/navisslate'
  },
  
  // Hours of Operation
  hours: {
    weekday: '6:00 AM - 11:00 PM',
    weekend: '6:00 AM - 11:00 PM',
    support: '24/7'
  },
  
  // Features/Add-ons
  addOns: [
    { id: 1, name: 'Child Car Seat', price: 0, description: 'Safety first for your little ones', icon: 'child_care' },
    { id: 2, name: 'Wheelchair Access', price: 0, description: 'Easy accessibility for elderly/disabled', icon: 'accessible' },
    { id: 3, name: 'Music System Upgrade', price: 500, description: 'Premium audio experience', icon: 'music_note' },
    { id: 4, name: 'Wi-Fi Hotspot', price: 0, description: 'Stay connected on the road', icon: 'wifi' },
    { id: 5, name: 'Complementary Snacks', price: 0, description: 'Refreshments included', icon: 'lunch_dining' },
    { id: 6, name: 'Professional Photographer', price: 2000, description: 'Capture your journey', icon: 'photo_camera' }
  ],
  
  // Analytics (add your tracking IDs)
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX', // Add your Google Analytics ID
    facebookPixelId: '1234567890', // Add your Facebook Pixel ID
  },
  
  // SEO Configuration
  seo: {
    siteName: 'Navis Slate',
    siteDescription: 'Premium inter-city travel service with luxury vehicles and professional drivers.',
    keywords: 'travel, inter-city, luxury cars, transportation, cab service',
    author: 'Navis Slate'
  }
};

// Export for use in scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
