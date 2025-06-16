import { useAPI } from './Context';
import { useEffect, useState } from 'react';
function ProductInfo(props) {
  const { data: products, loading } = useAPI();
  const [product, setProduct] = useState([]);
  if (!product) {/* This is where we will re-direct to the 404 page*/ }
  useEffect(() => {
    if (!loading && products.length > 0) {
      const foundProduct = products.find(p => p.id === props.productId);
      setProduct(foundProduct || {});
    }
  });
  return (
    <section>
      <div className="sidebar">
        <p>{product.category}</p>
        <h2>{product.title}</h2>
        <div>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
        </div>
      </div>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
    </section>
  );
}

export default ProductInfo;