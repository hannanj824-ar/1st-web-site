import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Truck, CreditCard, MessageCircle, MapPin, Phone, User, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPKR, STORE_CONTACT } from '../data/products';

export default function CheckoutModal() {
  const {
    cart,
    subtotal,
    discountAmount,
    appliedDiscount,
    totalAmount,
    clearCart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    setCompletedOrder
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Lahore',
    address: '',
    notes: '',
    paymentMethod: 'cod' // 'cod' | 'bank'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Active phone number is required for delivery';
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid Pakistani mobile number (e.g. 03064677684)';
    }
    if (!formData.address.trim()) errs.address = 'Complete delivery street address is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const orderId = `NSS-PK-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderPayload = {
        orderId,
        date: new Date().toLocaleDateString('en-PK', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        customer: formData,
        items: [...cart],
        subtotal,
        discountAmount,
        appliedDiscount,
        totalAmount,
        status: 'Order Placed (Sample Demonstration)'
      };

      setCompletedOrder(orderPayload);
      clearCart();
      setIsSubmitting(false);
      setIsCheckoutOpen(false);
    }, 700);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsCheckoutOpen(false)}>
      <div className="checkout-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-eyebrow">FINAL STEP</span>
            <h2 className="modal-title">Complete Your Order</h2>
          </div>
          <button
            className="modal-close-btn"
            onClick={() => setIsCheckoutOpen(false)}
            aria-label="Close checkout"
          >
            <X size={20} />
          </button>
        </div>

        <div className="checkout-grid">
          {/* Left: Form */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section-title">
              <Truck size={18} />
              <span>1. Delivery Information (Pakistan)</span>
            </div>

            <div className="form-row-2">
              <div className="form-field">
                <label>
                  Full Name <span className="req">*</span>
                </label>
                <div className="input-with-icon">
                  <User size={16} />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. Abdul Hannan"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
              </div>

              <div className="form-field">
                <label>
                  Mobile Number (WhatsApp) <span className="req">*</span>
                </label>
                <div className="input-with-icon">
                  <Phone size={16} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. 03064677684"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-field">
                <label>Email Address (Optional)</label>
                <div className="input-with-icon">
                  <Mail size={16} />
                  <input
                    type="email"
                    name="email"
                    placeholder="hannanj824@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>City <span className="req">*</span></label>
                <div className="input-with-icon">
                  <MapPin size={16} />
                  <select name="city" value={formData.city} onChange={handleChange}>
                    <option value="Lahore">Lahore (Fast 24-48h Delivery)</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Other">Other City in Pakistan</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-field">
              <label>Full Delivery Address <span className="req">*</span></label>
              <textarea
                name="address"
                rows="2"
                placeholder="House/Apartment #, Street, Near landmark, Area (e.g. Shadbagh, Lahore)"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span className="field-error">{errors.address}</span>}
            </div>

            <div className="form-field">
              <label>Special Instructions / Nearest Landmark</label>
              <input
                type="text"
                name="notes"
                placeholder="e.g. Deliver after 4 PM, call on arrival"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <div className="form-section-title mt-4">
              <CreditCard size={18} />
              <span>2. Payment Option</span>
            </div>

            <div className="payment-options-grid">
              <label className={`payment-card ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                />
                <div className="payment-content">
                  <div className="payment-title">Cash on Delivery (COD)</div>
                  <div className="payment-desc">Pay in cash when your shoes arrive at your door.</div>
                </div>
                <CheckCircle2 size={18} className="payment-check" />
              </label>

              <label className={`payment-card ${formData.paymentMethod === 'bank' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === 'bank'}
                  onChange={handleChange}
                />
                <div className="payment-content">
                  <div className="payment-title">Online Bank Transfer / Raast</div>
                  <div className="payment-desc">Transfer via mobile banking / Raast ID to store account.</div>
                </div>
                <CheckCircle2 size={18} className="payment-check" />
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary checkout-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing Order...' : `Confirm Order • ${formatPKR(totalAmount)}`}
            </button>
          </form>

          {/* Right: Order Summary */}
          <div className="checkout-summary-col">
            <h3 className="summary-title">Order Overview ({cart.length} shoes)</h3>

            <div className="checkout-items-list">
              {cart.map((item) => (
                <div key={item.cartItemId} className="checkout-item-preview">
                  <img src={item.image} alt={item.name} />
                  <div className="preview-details">
                    <span className="preview-name">{item.name}</span>
                    <span className="preview-meta">Size: EU {item.size} • Qty: {item.quantity}</span>
                    <span className="preview-price">{formatPKR(item.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="checkout-price-list">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>{formatPKR(subtotal)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="summary-row discount">
                  <span>Discount ({appliedDiscount}%):</span>
                  <span>-{formatPKR(discountAmount)}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Shipping:</span>
                <span className="free-text">FREE</span>
              </div>
              <div className="summary-row total">
                <span>Payable Amount:</span>
                <span className="total-amount">{formatPKR(totalAmount)}</span>
              </div>
            </div>

            <div className="checkout-trust-box">
              <div className="trust-row">
                <ShieldCheck size={16} />
                <span>Verified Independent Store Showcase</span>
              </div>
              <div className="trust-row">
                <Phone size={16} />
                <span>Support: {STORE_CONTACT.phoneFormatted}</span>
              </div>
              <div className="trust-row">
                <MapPin size={16} />
                <span>Dispatch Origin: {STORE_CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

