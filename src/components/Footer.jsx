import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Footer({ onNavigateSection }) {
  const { setActiveCategory, setIsSizeGuideOpen } = useCart();

  const handleNav = (cat) => {
    setActiveCategory(cat);
    if (onNavigateSection) {
      onNavigateSection('products-section');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-strip">
        <div className="section-container">
          <div className="footer-top-grid">
            <div className="footer-brand-col">
              <div className="footer-logo">
                <svg className="swoosh-icon-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.7 4.2c-.3-.2-.7-.2-1 0-4.6 3.1-9.3 7-13.7 8.2-1.9.5-3.6.3-4.8-.6-1-.8-1.5-2.2-1.2-3.7.3-1.6 1.7-3.1 3.8-4.2.3-.2.4-.6.2-.9-.2-.3-.6-.4-.9-.2-2.5 1.4-4.1 3.2-4.5 5.2-.4 1.9.2 3.8 1.6 4.9 1.5 1.2 3.6 1.4 6 .8 4.7-1.3 9.7-5.4 14.6-8.7.3-.2.4-.5.3-.8-.1-.3-.3-.6-.6-.7z" />
                </svg>
                <span className="footer-brand-title">NIKE SHOES STORE</span>
              </div>
              <p className="footer-tagline">
                Your premier destination for high-performance athletic footwear and streetwear sneakers in Lahore, Pakistan.
              </p>
              <div className="footer-socials">
                <a
                  href={STORE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-btn"
                  title="WhatsApp Support"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp: {STORE_CONTACT.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Shop Collections</h4>
              <ul className="footer-links-list">
                <li><button onClick={() => handleNav('all')}>All Shoes</button></li>
                <li><button onClick={() => handleNav('men')}>Men's Shoes</button></li>
                <li><button onClick={() => handleNav('women')}>Women's Shoes</button></li>
                <li><button onClick={() => handleNav('new')}>New Arrivals 2026</button></li>
                <li><button onClick={() => setIsSizeGuideOpen(true)}>Size Guide (EU/UK/US)</button></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Customer Service</h4>
              <ul className="footer-links-list">
                <li><button onClick={() => onNavigateSection && onNavigateSection('contact-section')}>Contact Store</button></li>
                <li><span>Cash on Delivery (Pakistan)</span></li>
                <li><span>Lahore Express 24h Delivery</span></li>
                <li><span>7-Day Sizing Exchange</span></li>
                <li><span>Order Tracking Support</span></li>
              </ul>
            </div>

            {/* Direct Contact Info */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Lahore Outlet</h4>
              <ul className="footer-contact-list">
                <li>
                  <MapPin size={18} />
                  <span>{STORE_CONTACT.location}</span>
                </li>
                <li>
                  <Phone size={18} />
                  <a href={`tel:${STORE_CONTACT.phone}`}>{STORE_CONTACT.phoneFormatted}</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href={`mailto:${STORE_CONTACT.email}`}>{STORE_CONTACT.email}</a>
                </li>
                <li>
                  <span className="timing-text">{STORE_CONTACT.timing}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Authenticity Disclaimer */}
      <div className="footer-disclaimer-strip">
        <div className="section-container">
          <p className="legal-disclaimer">
            <strong>Legal Disclaimer & Authenticity Verification:</strong> NIKE SHOES STORE (Shadbagh, Lahore, Pakistan)
            is an independent footwear retail showcase. All trademarks, registered logos, and brand names (including
            "Nike", "Swoosh", "Air Jordan", "Air Max") are the property of Nike, Inc. This website does not claim official
            representation or affiliation with Nike, Inc. All prices in Pakistani Rupees (PKR) and product specifications
            are reasonable sample listings for demonstration purposes until verified by store management.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="section-container footer-bottom-flex">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} NIKE SHOES STORE Lahore. All rights reserved.
          </p>
          <div className="payment-badges">
            <span className="pay-badge">Cash on Delivery (COD)</span>
            <span className="pay-badge">Direct Bank Transfer</span>
            <span className="pay-badge">Raast / JazzCash</span>
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

