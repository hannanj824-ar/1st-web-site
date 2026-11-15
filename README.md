# NIKE SHOES STORE 👟

A modern, professional, and responsive e-commerce web application for **NIKE SHOES STORE** built with **React**, **HTML5**, and modern **CSS3**.

---

## 🌟 Key Features

1. **Clean White & Black Monochrome Aesthetic**:
   - High-contrast, iconic athletic design inspired by premium sneaker culture.
   - Sleek typography, badges, smooth hover animations, and dark mode accents.

2. **Simple & Intuitive Navigation**:
   - Sticky navbar with brand swoosh logo.
   - Quick navigation links for **All Shoes**, **Men's Shoes**, **Women's Shoes**, **New Arrivals**, and **Contact Us**.
   - Real-time product search bar with instant clear button.
   - Shoe Size Conversion Guide (EU / US / UK / CM).
   - Dynamic Cart Icon with live badge counter.

3. **Large Homepage Hero Banner**:
   - Bold "JUST DO IT. STEP INTO GREATNESS" headline with outline effect.
   - Starting PKR price callout.
   - Direct CTA buttons: *Shop Men's Shoes*, *Shop Women's Shoes*, and *New Arrivals*.
   - Featured Air Jordan 1 display card with floating price badge.
   - Store authenticity & sample catalog notice.

4. **Categorized Shoe Sections**:
   - **Men's Shoes Section**: Basketball, running, and streetwear favorites.
   - **Women's Shoes Section**: Lifestyle, cross-training, and platform court sneakers.
   - **New Arrivals 2026 Drops**: Highlighted trending drops with "NEW" badges.

5. **Detailed Product Cards**:
   - High-resolution sneaker images with smooth zoom effect.
   - Available EU size selection pills (`EU 40`, `EU 41`, `EU 42`, etc.).
   - Interactive **Add to Cart** button with instant visual confirmation.
   - Wishlist toggle (heart icon).
   - Star rating and customer review count.
   - **Quick View Modal** with deep product specs, colorway, and sizing chart.

6. **Pakistani Rupees (PKR) Pricing & Sample Markings**:
   - All product prices clearly formatted in PKR (e.g., `PKR 29,500`).
   - Clear sample indicators (*Sample PKR Price*) and store disclaimer as requested.

7. **Full Shopping Cart System**:
   - Slide-out Cart Drawer with animated transitions.
   - Increment (+) and decrement (-) quantity controls.
   - Remove item button and clear cart button.
   - Working promotional coupon codes:
     - `NIKE10` (10% Discount)
     - `LAHORE` (15% Lahore Special Discount)
   - Real-time subtotal, discount, free shipping, and payable PKR calculation.
   - Direct **Quick Order via WhatsApp** button pre-filling full cart details to `03064677684`!

8. **Checkout & Order Confirmation**:
   - Complete checkout form for Pakistani addresses (Full Name, Phone number, City selector, Delivery Street Address).
   - Cash on Delivery (COD) and Online Bank Transfer options.
   - Simulated order receipt with unique tracking ID (e.g. `NSS-PK-849201`).
   - Direct click to send order confirmation to WhatsApp.

9. **Contact Us Section**:
   - **Phone**: `03064677684` (Click-to-call `tel:` link and direct WhatsApp)
   - **Email**: `hannanj824@gmail.com` (Click-to-email `mailto:` link)
   - **Location**: `Shadbagh, Lahore, Pakistan`
   - Store operating hours (Mon - Sat: 11:00 AM - 10:00 PM)
   - Working message inquiry form with instant submission notification.
   - Embedded interactive Google Map of Shadbagh, Lahore.

10. **100% Responsive Design**:
    - Mobile hamburger navigation menu.
    - Touch-optimized size buttons and cards.
    - Clean adaptive grids for mobile phones, tablets, and desktop laptops.

---

## 🚀 How to Run the Website Locally

### Prerequisites
Make sure you have **Node.js** (version 18 or newer) installed on your system.

### Steps:

1. **Open PowerShell or Terminal** in the project folder:
   ```powershell
   cd "c:\Users\starrr\OneDrive\Documents\WonderfulApps\nike.shoe store"
   ```

2. **Install Dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the Local Development Server**:
   ```bash
   npm run dev
   ```

4. **View in Your Browser**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   *(or the local URL displayed in your terminal)*

---

## 📁 Project Structure

```
nike.shoe store/
├── index.html                   # HTML entry point with athletic typography
├── package.json                 # Dependencies (React, Lucide icons, Vite)
├── vite.config.js               # Vite configuration (port 3000)
├── README.md                    # Project documentation
├── public/
│   └── nike-icon.svg            # Tab favicon
└── src/
    ├── main.jsx                 # React root entry point
    ├── index.css                # Global design system & typography
    ├── App.jsx                  # Main application structure
    ├── App.css                  # Comprehensive monochrome styling
    ├── data/
    │   └── products.js          # Sample shoe catalog with PKR pricing & contact info
    ├── context/
    │   └── CartContext.jsx      # Cart, wishlist, filters, promo codes & toast state
    └── components/
        ├── AnnouncementBar.jsx  # Top delivery & promo bar
        ├── Navbar.jsx           # Responsive header with search & cart counter
        ├── HeroBanner.jsx       # Large high-impact homepage banner
        ├── FeaturesBanner.jsx   # Trust & service highlights
        ├── CategorySection.jsx  # Men, Women, New Arrivals cards
        ├── ProductCard.jsx      # Shoe card with size pills & Add to Cart
        ├── ProductGrid.jsx      # Filterable catalog with search & sort
        ├── QuickViewModal.jsx   # Detailed shoe preview & specs
        ├── SizeGuideModal.jsx   # EU / US / UK / CM shoe size chart
        ├── CartDrawer.jsx       # Slide-out shopping cart with promo vouchers
        ├── CheckoutModal.jsx    # Delivery form & payment method
        ├── OrderSuccessModal.jsx# Simulated order receipt & WhatsApp link
        ├── ContactSection.jsx   # Phone, email, Shadbagh Lahore map & contact form
        ├── Footer.jsx           # Monochrome footer with disclaimer & links
        └── Toast.jsx            # Sleek notification alerts
```

---

## 🛡️ Authenticity & Reseller Disclaimer

> **Notice:** NIKE SHOES STORE (Shadbagh, Lahore, Pakistan) is an independent local retail and showcase demonstration. All brand names, trademarks, and logos belong to their respective owners (Nike, Inc.). Sample shoe models and prices in Pakistani Rupees (PKR) are displayed for demonstration and showcase purposes until confirmed with store management.

