import { useEffect, useState } from 'react';
import { useAPI } from './Context';
import { Link } from 'react-router-dom';

function SimilarProducts( { category, id} ) {
  const { data } = useAPI();
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const filteredProducts = data.filter(product => product.category === category && product.id !== id); // Exclude the current product by ID
      setSimilarProducts(filteredProducts.slice(0, 4));
    }
  }, [data, category]);
  return (
    <div className="similar-products container">
      <h2>Similar Products</h2>
      <div className="product-list">
        {similarProducts.map(product => (
           <Link reloadDocument to={`/product/${product.id}`} key={product.id}className="product-item">
              <img src={product.image} alt={product.title} className="product-img" />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SimilarProducts;