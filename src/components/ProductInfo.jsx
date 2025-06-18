import Counter from './Counter';
import { useEffect, useState } from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

function ProductInfo({ product }) {
  const stars = [];
  const outline = [];
  const [selectedProduct, setSelectedProduct] = useState({});
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  useEffect(() => {
      setSelectedProduct(product);
  }, [product]);
  

  const displayRating = selectedProduct?.rating ? round(selectedProduct.rating.rate, 0.5) : 0;

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
    <section className="flex product-details container">
      <div className="product-sidebar flex">
        <h2>{selectedProduct.title}</h2>
        <p className="category">{selectedProduct.category}</p>
        <div className="rating flex">
          <div className="stars flex star-overlay">
            {outline.map(star => (
              <div key={star.key}>
                {star}
              </div>
            ))}
            <div className="stars star-foreground flex">
              {stars.map(star => (
                <div key={star.key}>
                  {star}
                </div>
              ))}
            </div>
          </div>
          <p className="rating-value">({selectedProduct.rating?.count} reviews)</p>
        </div>
        <div>
          <p className="price">${selectedProduct.price}</p>
          <p className="description">{selectedProduct.description}</p>
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
        <img src={selectedProduct.image} alt={selectedProduct.title} />
        <div className="secondary-images flex">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>
      </div>
    </section>
  );
}


export default ProductInfo;