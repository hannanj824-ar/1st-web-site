import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPKR, STORE_CONTACT } from '../data/products';

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    subtotal,
    discountAmount,
    appliedDiscount,
    discountCode,
    setDiscountCode,
    discountMessage,
    shippingFee,
    totalAmount,
    updateQuantity,
    removeFromCart,
    clearCart,
    applyPromoCode,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen
  } = useCart();

  const [inputCode, setInputCode] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (inputCode.trim()) {
      applyPromoCode(inputCode);
    }
  };

  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Build WhatsApp pre-filled order message
  const generateWhatsAppCartMessage = () => {
    if (cart.length === 0) return '';
    let msg = `*Order Inquiry - NIKE SHOES STORE Lahore*%0A`;
    msg += `-------------------------------%0A`;
    cart.forEach((item, index) => {
      msg += `${index + 1}. *${encodeURIComponent(item.name)}*%0A`;
      msg += `   Size: EU ${item.size} | Qty: ${item.quantity} | ${formatPKR(item.price * item.quantity)}%0A`;
    });
    msg += `-------------------------------%0A`;
    msg += `Subtotal: ${formatPKR(subtotal)}%0A`;
    if (discountAmount > 0) {
      msg += `Discount (${appliedDiscount}%): -${formatPKR(discountAmount)}%0A`;
    }
    msg += `*Total Amount: ${formatPKR(totalAmount)}*%0A`;
    msg += `Delivery: Shadbagh, Lahore / Pakistan%0A`;
    msg += `Please confirm availability and dispatch!`;
    return `https://wa.me/923064677684?text=${msg}`;
  };

  return (
    <div className="cart-drawer-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title-row">
            <ShoppingBag size={22} />
            <h2>Your Shopping Cart</h2>
            <span className="cart-count-pill">{cartCount} items</span>
          </div>
          <button
            className="close-drawer-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Notification */}
        <div className="cart-shipping-notice">
          <ShieldCheck size={16} />
          <span>Free Nationwide Delivery across Pakistan & Lahore on all orders!</span>
        </div>

        {/* Cart Items List */}
        <div className="cart-items-scroll">
          {cart.length > 0 ? (
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.cartItemId} className="cart-item-card">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.cartItemId)}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="cart-item-meta">
                      <span className="cart-item-size">Size: EU {item.size}</span>
                      <span className="cart-item-unit-price">{formatPKR(item.price)} each</span>
                    </div>

                    <div className="cart-item-bottom">
                      {/* Quantity Controller */}
                      <div className="quantity-controls">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                          title="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-number">{item.quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                          title="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="cart-item-total-price">
                        {formatPKR(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="cart-actions-minor">
                <button className="clear-cart-text-btn" onClick={clearCart}>
                  Clear Shopping Cart
                </button>
              </div>
            </div>
          ) : (
            <div className="empty-cart-view">
              <ShoppingBag size={54} strokeWidth={1.5} className="empty-bag-icon" />
              <h3>Your Cart is Currently Empty</h3>
              <p>Explore our latest Men's, Women's, and New Arrivals collections to add your favorite pair of kicks.</p>
              <button
                className="btn-primary"
                onClick={() => setIsCartOpen(false)}
              >
                Start Shopping Now
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer (Summary & Checkout) */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="promo-form">
              <div className="promo-input-group">
                <Tag size={16} className="promo-icon" />
                <input
                  type="text"
                  placeholder="Promo code (e.g. NIKE10 or LAHORE)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                />
                <button type="submit" className="apply-promo-btn">
                  Apply
                </button>
              </div>
              {discountMessage && (
                <div className={`promo-feedback ${appliedDiscount > 0 ? 'success' : 'error'}`}>
                  {discountMessage}
                </div>
              )}
            </form>

            {/* Price Calculations */}
            <div className="cart-totals-breakdown">
              <div className="totals-row">
                <span>Subtotal:</span>
                <span>{formatPKR(subtotal)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="totals-row discount-row">
                  <span>Voucher Discount ({appliedDiscount}%):</span>
                  <span>-{formatPKR(discountAmount)}</span>
                </div>
              )}
              <div className="totals-row">
                <span>Delivery Charges (Pakistan):</span>
                <span className="free-badge">FREE</span>
              </div>
              <div className="totals-row grand-total-row">
                <span>Estimated Total:</span>
                <span className="grand-price">{formatPKR(totalAmount)}</span>
              </div>
              <span className="sample-calc-note">*Sample PKR catalog estimation</span>
            </div>

            {/* CTA Buttons */}
            <div className="cart-footer-buttons">
              <button className="btn-primary checkout-btn" onClick={handleOpenCheckout}>
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={generateWhatsAppCartMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Quick Order via WhatsApp ({STORE_CONTACT.phoneFormatted})</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

