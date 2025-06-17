import { useAPI } from './Context';
import Counter from './Counter';
import { useEffect, useState } from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ProductInfo(props) {
  const stars = [];
  const outline = [];
  const { data: products, loading } = useAPI();
  const [product, setProduct] = useState([]);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const navigate = useNavigate();

  useEffect(() => {
      if (loading) { return; }
      const foundProduct = products.find(p => p.id === props.productId);
      if (!foundProduct) {
        navigate('/*', { replace: true });
      } else {
        setProduct(foundProduct);
      }
  }, [loading, products, props.productId, navigate]);
  

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
    <section className="flex product-info">
      <div className="sidebar flex">
        <h2>{product.title}</h2>
        <p className="category">{product.category}</p>
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
          <p className="rating-value">({product.rating?.count} reviews)</p>
        </div>
        <div>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
        </div>
        <form action="onSubmit" className="flex add-form">
          <div className="sizes flex">
            {sizes.map((size, index) => (
              <>
                <input type="radio" name="size" id={size} key={index} />
                <label htmlFor={size} className="size-label">{size}</label>
              </>
            ))}
          </div>
          <Counter />
          {/* Add to cart button */}
        </form>
      </div>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <div className="secondary-images flex">
          <img src={product.image} alt={product.title} />
          <img src={product.image} alt={product.title} />
          <img src={product.image} alt={product.title} />
        </div>
      </div>
    </section>
  );
}


export default ProductInfo;