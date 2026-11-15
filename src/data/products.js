// Sample Product Catalog for NIKE SHOES STORE (Lahore, Pakistan)
// Note: All prices in Pakistani Rupees (PKR). Marked as sample indicative pricing.
// Disclaimer: Not directly affiliated with Nike Inc. Independent retail & showcase store.

export const PRODUCTS = [
  {
    id: 'nike-af1-07',
    name: "Nike Air Force 1 '07",
    subtitle: "Men's Everyday Iconic Sneaker",
    category: "men",
    isNewArrival: false,
    price: 29500,
    originalPrice: 34000,
    sizes: [40, 41, 42, 43, 44, 45],
    color: "Triple White",
    rating: 4.9,
    reviews: 184,
    tag: "Bestseller",
    description: "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold details and the perfect amount of flash.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Stitched leather overlays", "Nike Air cushioning", "Padded low-cut collar", "Perforations on toe"]
  },
  {
    id: 'nike-jordan-1-retro',
    name: "Nike Air Jordan 1 Retro High",
    subtitle: "Men's Heritage Streetwear Sneaker",
    category: "men",
    isNewArrival: true,
    price: 54900,
    originalPrice: 62000,
    sizes: [41, 42, 43, 44, 45],
    color: "Chicago Black / White / Gym Red",
    rating: 5.0,
    reviews: 247,
    tag: "Trending",
    description: "Familiar yet always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture. Premium leather and encapsulated Air-Sole cushioning provide legendary comfort.",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Full-grain leather upper", "Encapsulated Air-Sole unit", "Solid rubber outsole", "Deep flex grooves"]
  },
  {
    id: 'nike-air-max-270-w',
    name: "Nike Air Max 270",
    subtitle: "Women's Lifestyle & Walking Shoe",
    category: "women",
    isNewArrival: true,
    price: 36500,
    originalPrice: 42000,
    sizes: [36, 37, 38, 39, 40, 41],
    color: "Triple White / Light Bone",
    rating: 4.8,
    reviews: 139,
    tag: "New Arrival",
    description: "Nike's first lifestyle Air unit brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Max Air 270 unit delivers comfort", "Woven and synthetic upper", "Stretchy inner sleeve", "Rubber on the outsole"]
  },
  {
    id: 'nike-dunk-low-retro',
    name: "Nike Dunk Low Retro 'Panda'",
    subtitle: "Men's Classic Court Sneaker",
    category: "men",
    isNewArrival: true,
    price: 38900,
    originalPrice: 45000,
    sizes: [40, 41, 42, 43, 44],
    color: "Black / White Monochrome",
    rating: 4.9,
    reviews: 312,
    tag: "Hot Drop",
    description: "Created for the hardwood but taken to the streets, the '80s icon returns with perfectly shined overlays and classic team colors. Vintage basketball channelled into street style.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Crisp leather upper", "Foam midsole", "Padded, low-cut collar", "Bold color-blocking"]
  },
  {
    id: 'nike-pegasus-40',
    name: "Nike Air Zoom Pegasus 40",
    subtitle: "Men's High-Performance Running Shoe",
    category: "men",
    isNewArrival: false,
    price: 33500,
    originalPrice: 38000,
    sizes: [40, 41, 42, 43, 44, 45],
    color: "Monochrome Stealth Black",
    rating: 4.8,
    reviews: 195,
    tag: "Runner's Pick",
    description: "A springy ride for every run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals. This iteration has the same responsiveness and neutral support you love with improved comfort in sensitive areas.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Nike React technology foam", "Two Zoom Air units", "Single-layer engineered mesh", "Waffle-inspired outsole"]
  },
  {
    id: 'nike-metcon-9-w',
    name: "Nike Metcon 9 Workout",
    subtitle: "Women's Training & Crossfit Shoes",
    category: "women",
    isNewArrival: false,
    price: 34900,
    originalPrice: 40000,
    sizes: [36, 37, 38, 39, 40],
    color: "White / Metallic Silver / Black",
    rating: 4.9,
    reviews: 98,
    tag: "Gym Essential",
    description: "Whatever your reason for working out, the Metcon 9 makes it all worth it. We improved on the 8 with a larger Hyperlift plate and added rubber rope wrap for unstoppable durability and stability.",
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Larger Hyperlift plate for squats", "Lace lock system", "Extended rubber wrap", "Lightweight, breathable mesh"]
  },
  {
    id: 'nike-air-max-plus',
    name: "Nike Air Max Plus Drift",
    subtitle: "Men's Tuned Air Lifestyle Shoes",
    category: "men",
    isNewArrival: true,
    price: 46000,
    originalPrice: 52000,
    sizes: [40, 41, 42, 43, 44, 45],
    color: "Phantom / Summit White / Black",
    rating: 4.7,
    reviews: 82,
    tag: "New Arrival",
    description: "Let your attitude have the edge with the Air Max Plus Drift. A flame-like cage merges with airy mesh to create a defiant look. Tuned Air delivers exceptional stability and unbelievable cushioning.",
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Nike Max Air units in heel and forefoot", "Bold synthetic supportive cage", "Whale tail shank midfoot", "Durable rubber traction"]
  },
  {
    id: 'nike-court-legacy-lift-w',
    name: "Nike Court Legacy Lift",
    subtitle: "Women's Platform Sneakers",
    category: "women",
    isNewArrival: true,
    price: 26500,
    originalPrice: 30000,
    sizes: [36, 37, 38, 39, 40],
    color: "White / Desert Sand / Black Swoosh",
    rating: 4.8,
    reviews: 167,
    tag: "Trending",
    description: "Elevate your style with the Nike Court Legacy Lift. Its platform midsole delivers a bold statement on top of the classic, easy-to-wear tennis-inspired design.",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Subtly layered upper", "Platform midsole looks bold", "Padded heel and tongue", "Rubber herringbone outsole"]
  },
  {
    id: 'nike-react-infinity-w',
    name: "Nike InfinityRN 4",
    subtitle: "Women's Road Running Shoes",
    category: "women",
    isNewArrival: false,
    price: 37500,
    originalPrice: 43000,
    sizes: [36, 37, 38, 39, 40, 41],
    color: "Pure Platinum / White / Black",
    rating: 4.9,
    reviews: 114,
    tag: "High Cushion",
    description: "With supportive cushioning built for a smooth run, the InfinityRN 4 helps you take off. Made with our all-new Nike ReactX foam, which gives you 13% more energy return compared to React foam.",
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Brand new ReactX foam midsole", "Flyknit upper with water-resistant liner", "Waffle outsole for durable grip", "Ultra-comfortable collar"]
  },
  {
    id: 'nike-blazer-mid-77',
    name: "Nike Blazer Mid '77 Vintage",
    subtitle: "Men's & Women's Vintage Mid-Tops",
    category: "men",
    isNewArrival: false,
    price: 28500,
    originalPrice: 32000,
    sizes: [39, 40, 41, 42, 43, 44],
    color: "White / Black Retro Swoosh",
    rating: 4.8,
    reviews: 219,
    tag: "Retro Classic",
    description: "In the '70s, Nike was the new shoe on the block. The Blazer Mid '77 harnesses the old-school look of Nike basketball with a vintage midsole finish and lush suede accents.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Solid leather and synthetic upper", "Autoclave construction", "Exposed foam on the tongue", "Non-marking solid rubber"]
  },
  {
    id: 'nike-vaporfly-3',
    name: "Nike Vaporfly 3 Racing",
    subtitle: "Men's Elite Marathon Racing Shoes",
    category: "men",
    isNewArrival: true,
    price: 64500,
    originalPrice: 72000,
    sizes: [41, 42, 43, 44],
    color: "White / Deep Royal / Bright Crimson",
    rating: 5.0,
    reviews: 73,
    tag: "Elite Speed",
    description: "Catch 'em if you can. Giving you race-day speed to conquer any distance, the Nike Vaporfly 3 is made for the chasers, the racers and the elevated pacers.",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Full-length carbon fiber flyplate", "Nike ZoomX responsive foam", "Specifically selected Flyknit yarns", "Thin outsole rubber"]
  },
  {
    id: 'nike-air-zoom-bella-w',
    name: "Nike Air Zoom Bella 6",
    subtitle: "Women's Gym & Cross-Training Shoe",
    category: "women",
    isNewArrival: true,
    price: 24500,
    originalPrice: 28500,
    sizes: [36, 37, 38, 39, 40],
    color: "White / Metallic Gold / Black",
    rating: 4.7,
    reviews: 86,
    tag: "New Arrival",
    description: "Unleash your inner strength and spirit in the Nike Air Zoom Bella 6. This design supports heavy lifts, explosive movements and post-set struts as you flaunt your hard-earned progress on the gym floor.",
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=900&q=80"
    ],
    features: ["Zoom Air cushioning extends from heel to midfoot", "Updated forefoot frame creates more volume", "Midfoot lacing enhances support", "Flat sole keeps you stable"]
  }
];

// Helper to format PKR currency cleanly
export const formatPKR = (amount) => {
  return `PKR ${Number(amount).toLocaleString('en-PK')}`;
};

// Store Contact Details
export const STORE_CONTACT = {
  name: "NIKE SHOES STORE",
  phone: "03064677684",
  phoneFormatted: "0306-4677684",
  email: "hannanj824@gmail.com",
  location: "Shadbagh, Lahore, Pakistan",
  timing: "Mon - Sat: 11:00 AM - 10:00 PM | Sun: 2:00 PM - 10:00 PM",
  whatsappUrl: "https://wa.me/923064677684?text=Hello%20NIKE%20SHOES%20STORE%20Lahore,%20I%20am%20inquiring%20about%20a%20shoe%20order",
  disclaimer: "Sample products & indicative prices in PKR. Independent local showcase; not directly affiliated with Nike, Inc."
};

