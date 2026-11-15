import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Load initial cart from localStorage if present
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('nike_shoes_store_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('nike_shoes_store_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Navigation & Filter states
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'men' | 'women' | 'new'
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-asc' | 'price-desc' | 'rating'

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  // Discount voucher
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // percentage
  const [discountMessage, setDiscountMessage] = useState('');

  // Toast notifications
  const [toast, setToast] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('nike_shoes_store_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('nike_shoes_store_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Toast trigger
  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  // Add to cart
  const addToCart = (product, selectedSize = null, qty = 1) => {
    const sizeToUse = selectedSize || product.sizes[0];
    const cartItemId = `${product.id}-${sizeToUse}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartItemId,
            id: product.id,
            name: product.name,
            subtitle: product.subtitle,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            size: sizeToUse,
            quantity: qty
          }
        ];
      }
    });

    showToast(`Added "${product.name}" (Size EU ${sizeToUse}) to your cart!`);
  };

  // Update item quantity in cart
  const updateQuantity = (cartItemId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  // Remove from cart
  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
    showToast('Item removed from cart', 'info');
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    setAppliedDiscount(0);
    setDiscountCode('');
    setDiscountMessage('');
  };

  // Wishlist toggle
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from wishlist`, 'info');
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to wishlist!`);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Apply discount promo voucher
  const applyPromoCode = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'NIKE10') {
      setAppliedDiscount(10);
      setDiscountMessage('10% Discount applied with NIKE10 voucher!');
      showToast('10% discount promo voucher applied!');
      return true;
    } else if (cleanCode === 'LAHORE') {
      setAppliedDiscount(15);
      setDiscountMessage('15% Lahore Special Discount applied!');
      showToast('15% Lahore special discount applied!');
      return true;
    } else {
      setDiscountMessage('Invalid voucher code. Try NIKE10 or LAHORE');
      showToast('Invalid promo code. Try NIKE10 or LAHORE', 'error');
      return false;
    }
  };

  // Calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  // Free delivery within Lahore for orders, nominal standard PKR 400 for other cities
  const shippingFee = subtotal > 0 ? 0 : 0; // Free promo shipping nationwide
  const totalAmount = subtotal - discountAmount + shippingFee;

  return (
    <CartContext.Provider
      value={{
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
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        applyPromoCode,
        wishlist,
        toggleWishlist,
        isInWishlist,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        completedOrder,
        setCompletedOrder,
        toast,
        showToast,
        hideToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

