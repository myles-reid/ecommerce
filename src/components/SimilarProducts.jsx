import { useEffect, useState } from 'react';
import { useAPI } from './Context';

function SimilarProducts( { category} ) {
  const { data } = useAPI();
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const filteredProducts = data.filter(product => product.category === category);
      setSimilarProducts(filteredProducts.slice(0, 4));
    }
  }, [data, category]);
  return (
    <div className="similar-products">
      <h2>Similar Products</h2>
      <div className="product-list">
        {similarProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimilarProducts;