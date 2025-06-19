import Counter from './Counter';
import { useEffect, useState } from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { useAPI } from './Context';

function ProductInfo({ product }) {
  const stars = [];
  const outline = [];
  const [selectedProduct, setSelectedProduct] = useState({});
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const [count, setCount] = useState(1);
  const { addToCart } = useAPI();
  const [sizeError, setSizeError] = useState('');


  useEffect(() => {
      setSelectedProduct(product);
  }, [product]);

  const displayRating = selectedProduct?.rating ? round(selectedProduct.rating.rate, 0.5) : 0;

  function round(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}
  const categoryCode = new Map([
    ['electronics', 'elc'],
    ['jewelery', 'jwl'],
    ['men\'s clothing', 'mcl'],
    ['women\'s clothing', 'wcl']
  ])

  function createSKU(product) {
    const category = product.category?.toLowerCase();
    const productId = product?.id;
    const code = categoryCode.get(category) || 'oth';
    return `${code}-${productId?.toString().padStart(4, '0')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
  }

  function handleAddToCart() {
  const selectedSize = document.querySelector('input[name="size"]:checked')?.id;

  if (
    (selectedProduct.category === "men's clothing" || selectedProduct.category === "women's clothing") &&
    !selectedSize
  ) {
    setSizeError('Please select a size.');
    return;
  }

  setSizeError('');
  addToCart({ ...selectedProduct, quantity: count, size: selectedSize });
  setCount(1);
  document.querySelectorAll('input[name="size"]').forEach(input => input.checked = false);
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
        <h2>{selectedProduct?.title}</h2>
        <p className="category">{selectedProduct?.category}</p>
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
          <p className="price">
            {selectedProduct.price !== undefined ? selectedProduct?.price.toFixed(2) : 'Loading...'}
          </p>
          <div className="details">
            <p className="sku"><strong>SKU: </strong>{createSKU(selectedProduct)}</p>
            <p className="product-id"><strong>Product ID: </strong>{selectedProduct?.id}</p>
            <p className="tags"><strong>Tags: </strong> 
              <span className="tag"> Tag1</span>
              <span className="tag"> Tag2</span>
            </p>
          </div>
        </div>
         <form
          className="flex add-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
        >
          {(selectedProduct?.category === 'electronics' || selectedProduct?.category === 'jewelery') ?
           <></> :
           <div className="sizes-wrapper">
              <div className="sizes flex">
                {sizes.map((size, index) => (
                  <div key={index}>
                    <input type="radio" name="size" id={size} />
                    <label htmlFor={size} className="size-label">{size}</label>
                  </div>
                ))}
              </div>
              {sizeError && <p className="size-error">{sizeError}</p>}
            </div>  
          } 
          <Counter count={count} setCount={setCount} />

          <button type="submit" className="add-cart-btn">Add to Cart</button>
        </form>
      </div>
      <div className="product-image">
        <InnerImageZoom 
          src={selectedProduct?.image}
          zoomType='hover'
          zoomPreload={true}
          zoomScale={0.5}
        />
        <div className="secondary-images flex">
          <img src={selectedProduct?.image} alt={selectedProduct?.title} />
          <img src={selectedProduct?.image} alt={selectedProduct?.title} />
          <img src={selectedProduct?.image} alt={selectedProduct?.title} />
        </div>
      </div>
    </section>
  );
}


export default ProductInfo;