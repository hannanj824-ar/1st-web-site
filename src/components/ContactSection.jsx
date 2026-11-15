import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, ShieldAlert } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ContactSection() {
  const { showToast } = useCart();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Shoe Inquiry / Availability',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      showToast('Please fill in your name, phone and message', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast('Message sent! Our Lahore team will contact you shortly.');
      setForm({
        name: '',
        phone: '',
        email: '',
        subject: 'Shoe Inquiry / Availability',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact-section" className="contact-us-section">
      <div className="section-container">
        <div className="section-header-centered">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2 className="section-title">VISIT OR CONTACT OUR LAHORE STORE</h2>
          <p className="section-subtitle-text">
            Have questions about sneaker sizing, stock availability, or custom delivery?
            We are always here to assist our customers across Pakistan.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-column">
            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Phone size={24} />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">Direct Phone & WhatsApp</span>
                <a href={`tel:${STORE_CONTACT.phone}`} className="contact-card-value">
                  {STORE_CONTACT.phoneFormatted}
                </a>
                <p className="contact-card-sub">Available for instant calls & WhatsApp orders</p>
                <a
                  href={STORE_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp-pill"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={24} />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">Official Store Email</span>
                <a href={`mailto:${STORE_CONTACT.email}`} className="contact-card-value">
                  {STORE_CONTACT.email}
                </a>
                <p className="contact-card-sub">Send us inquiries, feedback or corporate orders</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">Store Location</span>
                <span className="contact-card-value">{STORE_CONTACT.location}</span>
                <p className="contact-card-sub">Lahore, Punjab, Pakistan</p>
              </div>
            </div>

            {/* Store Hours */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Clock size={24} />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">Operating Hours</span>
                <span className="contact-card-value">11:00 AM - 10:00 PM</span>
                <p className="contact-card-sub">Monday through Saturday (Sunday: 2:00 PM - 10:00 PM)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form & Location Map */}
          <div className="contact-form-column">
            <div className="contact-form-card">
              <h3 className="form-heading">Send Us a Direct Message</h3>
              <p className="form-subheading">Fill out the quick form below and our customer support will reply within 30 minutes.</p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle size={36} />
                  <h4>Thank You! Message Received</h4>
                  <p>Our store representative will call or WhatsApp you on your provided phone number shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="store-contact-form">
                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Your Name <span className="req">*</span></label>
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g. Abdul Hannan"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label>Phone / WhatsApp <span className="req">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. 03064677684"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="yourname@gmail.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label>Inquiry Topic</label>
                      <select name="subject" value={form.subject} onChange={handleChange}>
                        <option value="Shoe Inquiry / Availability">Shoe Inquiry / Availability</option>
                        <option value="Size Consultation">Size Consultation (EU/UK/US)</option>
                        <option value="Delivery to Lahore or Other City">Delivery to Lahore or Other City</option>
                        <option value="Bulk / Wholesale Request">Bulk / Wholesale Request</option>
                        <option value="Other Query">Other Query</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Your Message / Shoe Name & Size <span className="req">*</span></label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Please let us know which shoe model or questions you have..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary contact-submit-btn"
                    disabled={loading}
                  >
                    <Send size={16} />
                    <span>{loading ? 'Sending Message...' : 'Send Message to Store'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Location Map Preview */}
            <div className="map-embed-wrapper">
              <div className="map-header">
                <MapPin size={16} />
                <span>Store Landmark: Shadbagh, Lahore, Pakistan</span>
              </div>
              <iframe
                title="NIKE SHOES STORE Location Shadbagh Lahore"
                src="https://maps.google.com/maps?q=Shadbagh,%20Lahore,%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Store Verification Notice */}
        <div className="contact-disclaimer-notice">
          <ShieldAlert size={18} />
          <div>
            <strong>Verification & Authenticity Notice:</strong>
            <p>
              NIKE SHOES STORE operates as an independent retail storefront in Shadbagh, Lahore.
              We do not claim official corporate affiliation or endorsement by Nike Inc.
              All product photos, specifications, and PKR prices shown are for demonstration and catalog illustration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

