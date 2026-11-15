import React, { useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown, Search, RotateCcw } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductGrid() {
  const {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy
  } = useCart();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (activeCategory === 'men') {
      result = result.filter((p) => p.category === 'men');
    } else if (activeCategory === 'women') {
      result = result.filter((p) => p.category === 'women');
    } else if (activeCategory === 'new') {
      result = result.filter((p) => p.isNewArrival);
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const categoryTitles = {
    all: "ALL NIKE SHOES",
    men: "MEN'S SHOES COLLECTION",
    women: "WOMEN'S SHOES COLLECTION",
    new: "NEW ARRIVALS & 2026 DROPS"
  };

  const resetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <section id="products-section" className="products-showcase-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="catalog-header-bar">
          <div>
            <span className="section-eyebrow">AUTHENTIC SNEAKER CATALOG</span>
            <h2 className="catalog-main-title">{categoryTitles[activeCategory]}</h2>
            <p className="catalog-count-text">
              Showing <strong>{filteredProducts.length}</strong> available styles in Lahore, Pakistan
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-pill-group">
            <button
              className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Shoes
            </button>
            <button
              className={`filter-tab ${activeCategory === 'men' ? 'active' : ''}`}
              onClick={() => setActiveCategory('men')}
            >
              Men's
            </button>
            <button
              className={`filter-tab ${activeCategory === 'women' ? 'active' : ''}`}
              onClick={() => setActiveCategory('women')}
            >
              Women's
            </button>
            <button
              className={`filter-tab ${activeCategory === 'new' ? 'active' : ''}`}
              onClick={() => setActiveCategory('new')}
            >
              New Drops 🔥
            </button>
          </div>
        </div>

        {/* Toolbar: Search Feedback, Sort Dropdown & Notice */}
        <div className="catalog-toolbar">
          <div className="toolbar-left">
            {searchQuery && (
              <div className="search-status-tag">
                <span>Search results for: "<strong>{searchQuery}</strong>"</span>
                <button onClick={() => setSearchQuery('')} className="remove-search-tag">×</button>
              </div>
            )}
            <div className="price-verification-tag">
              <span>* Sample indicative prices in PKR - verified upon checkout</span>
            </div>
          </div>

          <div className="toolbar-right">
            <div className="sort-control">
              <ArrowUpDown size={16} />
              <label htmlFor="sort-select" className="sort-label">Sort By:</label>
              <select
                id="sort-select"
                className="sort-dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured / Recommended</option>
                <option value="price-asc">Price: Low to High (PKR)</option>
                <option value="price-desc">Price: High to Low (PKR)</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-catalog-state">
            <div className="empty-icon-wrap">
              <Search size={36} />
            </div>
            <h3>No Shoes Match Your Filter</h3>
            <p>We couldn't find any shoes matching your search "{searchQuery}".</p>
            <button className="btn-primary" onClick={resetFilters}>
              <RotateCcw size={16} />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

