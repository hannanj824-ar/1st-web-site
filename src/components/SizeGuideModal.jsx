import React from 'react';
import { X, Ruler, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function SizeGuideModal() {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useCart();

  if (!isSizeGuideOpen) return null;

  const menSizes = [
    { eu: 40, us: 7, uk: 6, cm: 25.0 },
    { eu: 41, us: 8, uk: 7, cm: 26.0 },
    { eu: 42, us: 8.5, uk: 7.5, cm: 26.5 },
    { eu: 43, us: 9.5, uk: 8.5, cm: 27.5 },
    { eu: 44, us: 10, uk: 9, cm: 28.0 },
    { eu: 45, us: 11, uk: 10, cm: 29.0 },
  ];

  const womenSizes = [
    { eu: 36, us: 5.5, uk: 3, cm: 22.5 },
    { eu: 37, us: 6.5, uk: 4, cm: 23.5 },
    { eu: 38, us: 7, uk: 4.5, cm: 24.0 },
    { eu: 39, us: 8, uk: 5.5, cm: 25.0 },
    { eu: 40, us: 8.5, uk: 6, cm: 25.5 },
    { eu: 41, us: 9.5, uk: 7, cm: 26.5 },
  ];

  return (
    <div className="modal-backdrop" onClick={() => setIsSizeGuideOpen(false)}>
      <div className="size-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="size-title-group">
            <Ruler size={22} />
            <h2 className="modal-title">Nike Shoe Size Conversion Chart</h2>
          </div>
          <button
            className="modal-close-btn"
            onClick={() => setIsSizeGuideOpen(false)}
            aria-label="Close size guide"
          >
            <X size={20} />
          </button>
        </div>

        <div className="size-guide-content">
          <p className="size-intro">
            Pakistan shoe sizes generally follow <strong>European (EU)</strong> or <strong>UK</strong> sizing.
            Use this official reference table to find your ideal fit.
          </p>

          <h4 className="size-table-title">Men's Footwear Sizing</h4>
          <div className="table-responsive">
            <table className="size-table">
              <thead>
                <tr>
                  <th>EU Size</th>
                  <th>US Men</th>
                  <th>UK</th>
                  <th>Foot Length (CM)</th>
                </tr>
              </thead>
              <tbody>
                {menSizes.map((row) => (
                  <tr key={row.eu}>
                    <td><strong>EU {row.eu}</strong></td>
                    <td>US {row.us}</td>
                    <td>UK {row.uk}</td>
                    <td>{row.cm} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="size-table-title mt-4">Women's Footwear Sizing</h4>
          <div className="table-responsive">
            <table className="size-table">
              <thead>
                <tr>
                  <th>EU Size</th>
                  <th>US Women</th>
                  <th>UK</th>
                  <th>Foot Length (CM)</th>
                </tr>
              </thead>
              <tbody>
                {womenSizes.map((row) => (
                  <tr key={row.eu}>
                    <td><strong>EU {row.eu}</strong></td>
                    <td>US {row.us}</td>
                    <td>UK {row.uk}</td>
                    <td>{row.cm} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="size-tip-box">
            <Info size={18} />
            <div>
              <strong>Pro Tip for Nike Sneakers:</strong>
              <p>For running and performance models (like Pegasus, Vaporfly), we recommend going half a size up for maximum toe box comfort.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

