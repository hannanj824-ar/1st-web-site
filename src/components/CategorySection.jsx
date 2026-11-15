import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CategorySection({ onNavigateSection }) {
  const { setActiveCategory } = useCart();

  const categories = [
    {
      id: 'men',
      title: "MEN'S SHOES",
      subtitle: "Basketball, Running & Lifestyle Sneakers",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80",
      count: "8+ Styles"
    },
    {
      id: 'women',
      title: "WOMEN'S SHOES",
      subtitle: "Running, Training & Platform Court Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
      count: "6+ Styles"
    },
    {
      id: 'new',
      title: "NEW ARRIVALS",
      subtitle: "Fresh 2026 Drops & Limited Releases",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80",
      count: "Latest Models"
    }
  ];

  const handleSelect = (catId) => {
    setActiveCategory(catId);
    if (onNavigateSection) {
      onNavigateSection('products-section');
    }
  };

  return (
    <section className="category-section">
      <div className="section-container">
        <div className="section-header-row">
          <div>
            <span className="section-eyebrow">EXPLORE BY CATEGORY</span>
            <h2 className="section-title">FIND YOUR PERFECT PAIR</h2>
          </div>
          <p className="section-subtitle-text">
            From hardwood basketball legends to daily marathon trainers.
          </p>
        </div>

        <div className="category-cards-grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => handleSelect(cat.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSelect(cat.id); }}
            >
              <div className="category-image-wrap">
                <img src={cat.image} alt={cat.title} className="category-img" loading="lazy" />
                <div className="category-overlay"></div>
              </div>
              <div className="category-info">
                <span className="category-count">{cat.count}</span>
                <h3 className="category-name">{cat.title}</h3>
                <p className="category-desc">{cat.subtitle}</p>
                <div className="category-cta-pill">
                  <span>Shop Collection</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

