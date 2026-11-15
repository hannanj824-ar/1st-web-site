import React from 'react';
import { ArrowRight, Sparkles, ShieldAlert, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPKR } from '../data/products';

export default function HeroBanner({ onNavigateSection }) {
  const { setActiveCategory } = useCart();

  const handleHeroCta = (category) => {
    setActiveCategory(category);
    if (onNavigateSection) {
      onNavigateSection('products-section');
    }
  };

  return (
    <section className="hero-banner-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Bold Typography & CTAs */}
          <div className="hero-text-col">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>2026 PREMIUM ATHLETIC COLLECTION</span>
            </div>

            <h1 className="hero-headline">
              JUST DO IT.<br />
              <span className="hero-outline-text">STEP INTO GREATNESS.</span>
            </h1>

            <p className="hero-description">
              Engineered for athletes, crafted for street culture. Discover the latest
              cushioning innovations, iconic retro silhouettes, and high-performance footwear
              delivered directly to your doorstep in Lahore and across Pakistan.
            </p>

            {/* Price Callout Banner */}
            <div className="hero-price-strip">
              <span className="price-label">Starting from:</span>
              <span className="price-tag">{formatPKR(24500)}</span>
              <span className="price-note">All prices in Pakistani Rupees (PKR)</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <button
                className="btn-primary hero-btn"
                onClick={() => handleHeroCta('men')}
              >
                <span>Shop Men's Shoes</span>
                <ArrowRight size={18} />
              </button>

              <button
                className="btn-secondary hero-btn"
                onClick={() => handleHeroCta('women')}
              >
                <span>Shop Women's Shoes</span>
                <ArrowRight size={18} />
              </button>

              <button
                className="btn-outline hero-btn"
                onClick={() => handleHeroCta('new')}
              >
                <span>New Arrivals</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="hero-perks">
              <div className="perk-item">
                <span className="perk-bullet">•</span>
                <span>Fast Dispatch from Lahore</span>
              </div>
              <div className="perk-item">
                <span className="perk-bullet">•</span>
                <span>Cash on Delivery Available</span>
              </div>
              <div className="perk-item">
                <span className="perk-bullet">•</span>
                <span>Size Exchange Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Featured Sneaker Display */}
          <div className="hero-image-col">
            <div className="hero-image-card">
              <div className="hero-shoe-tag">AIR JORDAN 1 RETRO</div>
              <img
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80"
                alt="Nike Premium Sneaker"
                className="hero-shoe-img"
              />
              <div className="hero-floating-card">
                <div className="floating-card-header">
                  <Award size={18} />
                  <span>Trending Drop</span>
                </div>
                <div className="floating-card-body">
                  <strong>Nike Air Jordan 1 High</strong>
                  <span className="floating-card-price">{formatPKR(54900)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verification and Disclaimer Notice */}
        <div className="hero-disclaimer-card">
          <ShieldAlert size={18} />
          <p>
            <strong>Store Notice & Disclaimer:</strong> NIKE SHOES STORE (Shadbagh, Lahore) is an independent
            showcase & footwear reseller. All brand trademarks belong to Nike, Inc. Sample models,
            specifications, and prices in PKR are listed for display purposes until verified upon direct order confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}

