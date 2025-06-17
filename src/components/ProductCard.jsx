function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h4>{product.title}</h4>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
