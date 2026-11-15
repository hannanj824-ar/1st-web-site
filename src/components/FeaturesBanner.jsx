import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';

export default function FeaturesBanner() {
  const perks = [
    {
      icon: <Truck size={28} />,
      title: "Fast Pakistan Delivery",
      desc: "Fast delivery within Lahore (24-48h) and nationwide courier coverage."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Inspected",
      desc: "Every sneaker pair is thoroughly checked for stitching, cushioning & finish."
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Hassle-Free Size Exchange",
      desc: "Wrong shoe size? Enjoy our simple 7-day doorstep size replacement policy."
    },
    {
      icon: <Headphones size={28} />,
      title: "Direct Store Support",
      desc: `Chat directly on WhatsApp or call our Lahore desk at ${STORE_CONTACT.phoneFormatted}.`
    }
  ];

  return (
    <section className="features-section">
      <div className="section-container">
        <div className="features-grid">
          {perks.map((perk, index) => (
            <div key={index} className="feature-item-card">
              <div className="feature-icon-wrapper">{perk.icon}</div>
              <div className="feature-text">
                <h4 className="feature-title">{perk.title}</h4>
                <p className="feature-desc">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

