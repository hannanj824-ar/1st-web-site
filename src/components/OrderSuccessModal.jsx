import React from 'react';
import { CheckCircle, MessageCircle, MapPin, Phone, PackageCheck, Printer, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPKR, STORE_CONTACT } from '../data/products';

export default function OrderSuccessModal() {
  const { completedOrder, setCompletedOrder } = useCart();

  if (!completedOrder) return null;

  const { orderId, date, customer, items, totalAmount, discountAmount, appliedDiscount } = completedOrder;

  const handlePrint = () => {
    window.print();
  };

  const generateWhatsAppConfirmation = () => {
    let msg = `*CONFIRMED ORDER: ${orderId}*%0A`;
    msg += `Customer: ${encodeURIComponent(customer.fullName)}%0A`;
    msg += `Phone: ${encodeURIComponent(customer.phone)}%0A`;
    msg += `Delivery Address: ${encodeURIComponent(customer.address)}, ${customer.city}%0A`;
    msg += `-------------------------------%0A`;
    items.forEach((item, index) => {
      msg += `${index + 1}. *${encodeURIComponent(item.name)}* (EU ${item.size}) x${item.quantity}%0A`;
    });
    msg += `-------------------------------%0A`;
    msg += `*Total Payable: ${formatPKR(totalAmount)}* (${customer.paymentMethod.toUpperCase()})%0A`;
    msg += `Store: NIKE SHOES STORE (Shadbagh, Lahore)%0A`;
    return `https://wa.me/923064677684?text=${msg}`;
  };

  return (
    <div className="modal-backdrop" onClick={() => setCompletedOrder(null)}>
      <div className="success-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon-banner">
          <div className="success-circle">
            <CheckCircle size={44} />
          </div>
          <h2>Thank You For Your Order!</h2>
          <p className="order-num-text">Order Reference: <strong>{orderId}</strong></p>
          <span className="sample-order-banner">Simulated Order Demonstration • PKR Sample Price</span>
        </div>

        <div className="receipt-container">
          <div className="receipt-meta-row">
            <div>
              <span className="receipt-label">Order Date:</span>
              <p className="receipt-val">{date}</p>
            </div>
            <div>
              <span className="receipt-label">Payment Method:</span>
              <p className="receipt-val">
                {customer.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Bank Transfer'}
              </p>
            </div>
          </div>

          <div className="receipt-customer-box">
            <h4 className="receipt-section-heading">Delivery Destination</h4>
            <p><strong>{customer.fullName}</strong></p>
            <p><Phone size={14} className="inline-icon" /> {customer.phone}</p>
            <p><MapPin size={14} className="inline-icon" /> {customer.address}, {customer.city}</p>
          </div>

          <div className="receipt-items-list">
            <h4 className="receipt-section-heading">Items Summary</h4>
            {items.map((item) => (
              <div key={item.cartItemId} className="receipt-item-row">
                <span className="receipt-item-name">
                  {item.name} <span className="receipt-sub-size">(Size EU {item.size} × {item.quantity})</span>
                </span>
                <span className="receipt-item-price">{formatPKR(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="receipt-total-block">
            {discountAmount > 0 && (
              <div className="receipt-summary-line discount">
                <span>Voucher Discount ({appliedDiscount}%):</span>
                <span>-{formatPKR(discountAmount)}</span>
              </div>
            )}
            <div className="receipt-summary-line">
              <span>Delivery within Pakistan:</span>
              <span>FREE</span>
            </div>
            <div className="receipt-summary-line grand">
              <span>Total Amount:</span>
              <span>{formatPKR(totalAmount)}</span>
            </div>
          </div>
        </div>

        {/* WhatsApp confirmation prompt */}
        <div className="order-actions-container">
          <a
            href={generateWhatsAppConfirmation()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp receipt-whatsapp-btn"
          >
            <MessageCircle size={20} />
            <span>Send Order Details to WhatsApp (03064677684)</span>
          </a>

          <div className="receipt-button-group">
            <button className="btn-secondary" onClick={handlePrint}>
              <Printer size={16} />
              <span>Print Receipt</span>
            </button>
            <button className="btn-primary" onClick={() => setCompletedOrder(null)}>
              <span>Continue Shopping</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="receipt-footer-store">
          <p><strong>NIKE SHOES STORE</strong> • Shadbagh, Lahore, Pakistan</p>
          <p>For order queries, contact <strong>{STORE_CONTACT.phoneFormatted}</strong> or email <strong>{STORE_CONTACT.email}</strong></p>
        </div>
      </div>
    </div>
  );
}

