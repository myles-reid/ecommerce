import { useAPI } from './Context';
import Counter from './Counter';
import { useEffect, useState } from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

function ProductInfo(props) {
  const stars = [];
  const outline = [];
  const { data: products, loading } = useAPI();
  const [product, setProduct] = useState([]);

  if (!product) {/* This is where we will re-direct to the 404 page*/ }
  
  
  useEffect(() => {
      const foundProduct = products.find(p => p.id === props.productId);
      setProduct(foundProduct || {});
  }, [props.productId, products]);

  const displayRating = product?.rating ? round(product.rating.rate, 0.5) : 0;

  function round(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

  for (let i = 0; i < 5; i++) {
    outline.push(
      <FaRegStar
        key={i}
        className="star grey"
      />
    );

    if (i < Math.floor(displayRating)) {
      // Full star
      stars.push(
        <FaStar 
          key={i}
          className="star gold"
        />
      );
    } else if (i === Math.floor(displayRating) && displayRating % 1 === 0.5) {
      // Half star
      stars.push(
        <FaStarHalf 
          key={i}
          className="star gold"
        />
      );
    } 
  }
  

  return (
    <section className="flex">
      <div className="sidebar">
        <p>{product.category}</p>
        <h2>{product.title}</h2>
        <div className="rating flex">
          <div className="stars flex star-overlay">
            {outline.map(star => (
              <div key={star.key}>
                {star}
              </div>
            ))}
            {/* Filled/Half stars (foreground, overlay) */}
            <div className="stars star-foreground flex">
              {stars.map(star => (
                <div key={star.key}>
                  {star}
                </div>
              ))}
            </div>
          </div>
          <p className="rating-value">({product.rating?.count})</p>
        </div>
        <div>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
        </div>
        <Counter />
      </div>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
    </section>
  );
}


export default ProductInfo;