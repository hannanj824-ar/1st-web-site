import React from 'react';
import { Phone, Truck, ShieldCheck, Tag } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <div className="announcement-item">
          <Truck size={14} />
          <span>Free Express Delivery in Lahore & Nationwide Delivery Across Pakistan</span>
        </div>
        <div className="announcement-item hidden-mobile">
          <Tag size={14} />
          <span>Use code <strong>NIKE10</strong> for 10% Off Your First Order</span>
        </div>
        <div className="announcement-item">
          <Phone size={14} />
          <a href={`tel:${STORE_CONTACT.phone}`} className="announcement-link">
            Order by Phone/WhatsApp: <strong>{STORE_CONTACT.phoneFormatted}</strong>
          </a>
        </div>
        <div className="announcement-badge hidden-tablet">
          <ShieldCheck size={14} />
          <span>Sample Catalog & PKR Indicative Prices</span>
        </div>
      </div>
    </div>
  );
}

