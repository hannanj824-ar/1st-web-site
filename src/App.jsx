import React from 'react';
import { CartProvider } from './context/CartContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import FeaturesBanner from './components/FeaturesBanner';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderSuccessModal from './components/OrderSuccessModal';
import QuickViewModal from './components/QuickViewModal';
import SizeGuideModal from './components/SizeGuideModal';
import Toast from './components/Toast';
import { MessageCircle } from 'lucide-react';
import { STORE_CONTACT } from './data/products';
import './App.css';

function MainStore() {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="store-app-root">
      {/* Top Banner & Navigation */}
      <AnnouncementBar />
      <Navbar onNavigateSection={scrollToSection} />

      {/* Main Content */}
      <main>
        {/* Large Homepage Hero Banner */}
        <HeroBanner onNavigateSection={scrollToSection} />

        {/* Store Trust Perks */}
        <FeaturesBanner />

        {/* Visual Category Cards (Men, Women, New Arrivals) */}
        <CategorySection onNavigateSection={scrollToSection} />

        {/* Shoes Catalog (Men's, Women's, New Arrivals with PKR Prices) */}
        <ProductGrid />

        {/* Contact Us Section (Lahore, Phone, Email, Map) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigateSection={scrollToSection} />

      {/* Slide-out & Modal Components */}
      <CartDrawer />
      <CheckoutModal />
      <OrderSuccessModal />
      <QuickViewModal />
      <SizeGuideModal />
      <Toast />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={STORE_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat with NIKE SHOES STORE Lahore on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="floating-tooltip">Chat with us (03064677684)</span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainStore />
    </CartProvider>
  );
}

