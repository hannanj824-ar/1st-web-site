import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, Check, Ruler, MessageCircle, ShieldAlert } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPKR, STORE_CONTACT } from '../data/products';

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsSizeGuideOpen
  } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!quickViewProduct) return null;

  const currentSize = selectedSize || quickViewProduct.sizes[0];
  const isFavorited = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, currentSize, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello NIKE SHOES STORE Lahore, I am interested in ordering:\n` +
      `Product: ${quickViewProduct.name}\n` +
      `Size: EU ${currentSize}\n` +
      `Price: ${formatPKR(quickViewProduct.price)}\n` +
      `Please let me know stock availability at your Shadbagh store.`
    );
    window.open(`https://wa.me/923064677684?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={() => setQuickViewProduct(null)}>
      <div className="quickview-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        <div className="quickview-grid">
          {/* Product Image */}
          <div className="quickview-image-container">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="quickview-img"
            />
            {quickViewProduct.tag && (
              <span className="quickview-tag">{quickViewProduct.tag}</span>
            )}
          </div>

          {/* Product Details & Actions */}
          <div className="quickview-details">
            <div className="quickview-category-row">
              <span className="quickview-category">
                {quickViewProduct.category === 'men' ? "Men's Footwear" : "Women's Footwear"}
              </span>
              <div className="quickview-rating">
                <Star size={15} className="star-filled" />
                <span>{quickViewProduct.rating}</span>
                <span className="reviews">({quickViewProduct.reviews} reviews)</span>
              </div>
            </div>

            <h2 className="quickview-title">{quickViewProduct.name}</h2>
            <p className="quickview-subtitle">{quickViewProduct.subtitle}</p>

            {/* Price block */}
            <div className="quickview-price-row">
              <span className="quickview-price">{formatPKR(quickViewProduct.price)}</span>
              {quickViewProduct.originalPrice && (
                <span className="quickview-original-price">
                  {formatPKR(quickViewProduct.originalPrice)}
                </span>
              )}
              <span className="quickview-pkr-tag">Pakistani Rupees (PKR)</span>
            </div>

            <div className="quickview-colorway">
              <span>Colorway:</span> <strong>{quickViewProduct.color}</strong>
            </div>

            <p className="quickview-description">{quickViewProduct.description}</p>

            {/* Key Features */}
            {quickViewProduct.features && (
              <div className="quickview-features">
                <span className="features-title">Performance Highlights:</span>
                <ul>
                  {quickViewProduct.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Size Selector */}
            <div className="quickview-sizes">
              <div className="size-header">
                <span className="label">Select Size (EU):</span>
                <button
                  type="button"
                  className="size-guide-link"
                  onClick={() => setIsSizeGuideOpen(true)}
                >
                  <Ruler size={14} />
                  <span>Size Chart</span>
                </button>
              </div>
              <div className="sizes-grid">
                {quickViewProduct.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    className={`size-btn ${currentSize === sz ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(sz)}
                  >
                    EU {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quickview-quantity-row">
              <span className="qty-label">Quantity:</span>
              <div className="qty-picker">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="quickview-buttons">
              <button
                className={`btn-primary add-to-cart-large ${addedSuccess ? 'success' : ''}`}
                onClick={handleAddToCart}
              >
                {addedSuccess ? (
                  <>
                    <Check size={18} />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>Add to Cart • {formatPKR(quickViewProduct.price * quantity)}</span>
                  </>
                )}
              </button>

              <button
                className={`quickview-wishlist-btn ${isFavorited ? 'active' : ''}`}
                onClick={() => toggleWishlist(quickViewProduct)}
                title="Save to Wishlist"
              >
                <Heart size={20} fill={isFavorited ? "currentColor" : "none"} />
              </button>
            </div>

            <button
              className="btn-whatsapp quickview-whatsapp"
              onClick={handleWhatsAppInquiry}
            >
              <MessageCircle size={18} />
              <span>Inquire / Order on WhatsApp (03064677684)</span>
            </button>

            {/* Sample disclaimer notice */}
            <div className="quickview-disclaimer">
              <ShieldAlert size={14} />
              <span>Sample product listing & PKR pricing for showcase demonstration.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

