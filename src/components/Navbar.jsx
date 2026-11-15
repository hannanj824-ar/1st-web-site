import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Phone, MapPin, Ruler } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONTACT } from '../data/products';

export default function Navbar({ onNavigateSection }) {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    setIsSizeGuideOpen
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection('products-section');
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection('contact-section');
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar-container">
        {/* Left: Mobile Menu Toggle & Brand Logo */}
        <div className="navbar-left">
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); handleCategoryClick('all'); }}>
            <svg className="swoosh-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.7 4.2c-.3-.2-.7-.2-1 0-4.6 3.1-9.3 7-13.7 8.2-1.9.5-3.6.3-4.8-.6-1-.8-1.5-2.2-1.2-3.7.3-1.6 1.7-3.1 3.8-4.2.3-.2.4-.6.2-.9-.2-.3-.6-.4-.9-.2-2.5 1.4-4.1 3.2-4.5 5.2-.4 1.9.2 3.8 1.6 4.9 1.5 1.2 3.6 1.4 6 .8 4.7-1.3 9.7-5.4 14.6-8.7.3-.2.4-.5.3-.8-.1-.3-.3-.6-.6-.7z" />
            </svg>
            <span className="brand-title">NIKE SHOES STORE</span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <ul className="desktop-nav-links">
          <li>
            <button
              className={`nav-link-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('all')}
            >
              All Shoes
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${activeCategory === 'men' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('men')}
            >
              Men's Shoes
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${activeCategory === 'women' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('women')}
            >
              Women's Shoes
            </button>
          </li>
          <li>
            <button
              className={`nav-link-btn ${activeCategory === 'new' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('new')}
            >
              New Arrivals
              <span className="nav-pulse-badge">NEW</span>
            </button>
          </li>
          <li>
            <button
              className="nav-link-btn"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Right: Search, Size Guide, Wishlist & Cart */}
        <div className="navbar-actions">
          {/* Search Bar */}
          <div className={`search-container ${showSearchInput ? 'expanded' : ''}`}>
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search Air Jordan, Pegasus, Air Max..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSearchInput(true)}
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Size Guide Button */}
          <button
            className="action-icon-btn hidden-mobile"
            onClick={() => setIsSizeGuideOpen(true)}
            title="Size Conversion Guide"
          >
            <Ruler size={20} />
            <span className="btn-label-text">Size Guide</span>
          </button>

          {/* Cart Icon with Live Counter */}
          <button
            className="action-icon-btn cart-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label="View Shopping Cart"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown">
          <div className="mobile-search-wrapper">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search shoes by name or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="mobile-nav-items">
            <button
              className={`mobile-nav-link ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('all')}
            >
              All Shoes
            </button>
            <button
              className={`mobile-nav-link ${activeCategory === 'men' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('men')}
            >
              Men's Shoes Collection
            </button>
            <button
              className={`mobile-nav-link ${activeCategory === 'women' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('women')}
            >
              Women's Shoes Collection
            </button>
            <button
              className={`mobile-nav-link ${activeCategory === 'new' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('new')}
            >
              New Arrivals 🔥
            </button>
            <button
              className="mobile-nav-link"
              onClick={() => { setIsSizeGuideOpen(true); setMobileMenuOpen(false); }}
            >
              Shoe Size Guide (EU/UK/US)
            </button>
            <button
              className="mobile-nav-link"
              onClick={handleContactClick}
            >
              Contact Us (Lahore Store)
            </button>
          </div>

          <div className="mobile-quick-contact">
            <div className="mobile-contact-line">
              <Phone size={16} />
              <a href={`tel:${STORE_CONTACT.phone}`}>{STORE_CONTACT.phoneFormatted}</a>
            </div>
            <div className="mobile-contact-line">
              <MapPin size={16} />
              <span>{STORE_CONTACT.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

