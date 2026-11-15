import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPKR } from '../data/products';

export default function ProductCard({ product }) {
  const { addToCart, setQuickViewProduct, toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, selectedSize, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      {/* Badges & Actions Overlay */}
      <div className="card-top-bar">
        <div className="card-badges">
          {product.isNewArrival && <span className="badge badge-black">NEW</span>}
          {product.tag && <span className="badge badge-outline">{product.tag}</span>}
          {discountPercent > 0 && <span className="badge badge-red">-{discountPercent}%</span>}
        </div>

        <button
          className={`wishlist-heart-btn ${isFavorited ? 'favorited' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} fill={isFavorited ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Product Image with Quick View Hover Trigger */}
      <div
        className="product-image-container"
        onClick={() => setQuickViewProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
          loading="lazy"
          onError={(e) => {
            // Graceful fallback sneaker placeholder
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80";
          }}
        />
        <div className="quick-view-overlay">
          <button
            className="quick-view-btn"
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
          >
            <Eye size={16} />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-info-wrap">
        <div className="product-rating-row">
          <div className="star-rating">
            <Star size={14} className="star-filled" />
            <span className="rating-value">{product.rating}</span>
            <span className="reviews-count">({product.reviews})</span>
          </div>
          <span className="product-category-label">
            {product.category === 'men' ? "Men's Shoe" : "Women's Shoe"}
          </span>
        </div>

        <h3
          className="product-title"
          onClick={() => setQuickViewProduct(product)}
          title={product.name}
        >
          {product.name}
        </h3>

        <p className="product-subtitle">{product.subtitle}</p>

        {/* Size Selection Pills */}
        <div className="size-selector-wrap">
          <span className="size-label">Size (EU):</span>
          <div className="size-pills-row">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`size-pill ${selectedSize === size ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="card-footer-action">
          <div className="price-stack">
            <span className="current-price">{formatPKR(product.price)}</span>
            {product.originalPrice && (
              <span className="original-price">{formatPKR(product.originalPrice)}</span>
            )}
            <span className="sample-price-indicator">*Sample PKR Price</span>
          </div>

          <button
            className={`btn-add-cart ${justAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} size ${selectedSize} to cart`}
          >
            {justAdded ? (
              <>
                <Check size={16} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag size={16} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

