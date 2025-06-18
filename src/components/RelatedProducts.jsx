import React from 'react';
import { useAPI } from './Context';
import { Link } from 'react-router-dom';

function RelatedProducts() {
  const { data } = useAPI();
  const related = data.slice(0, 5);

  return (
    <div className="related-container">
      <h2 className="related-title">RELATED PRODUCTS</h2>
      <hr className="divider" />
      <div className="related-grid">
        {related.map((product) => (
          <Link to="/cart" key={product.id} className="related-card">
            <span className="product-tag">NEW</span>

            <img src={product.image} alt={product.title} className="related-img" />

            <div className="related-info">
              <p className="product-title">{product.title}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
