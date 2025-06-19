function ProductExtras({ product }) {
  return (
    <div className="product-extras-wrapper">
      <div className="extra-topbar nav">
        <a href="" className="active"></a>
        <a href="" className="active"></a>
        <a href="" className="active"></a>
        <a href="" className="active"></a>
        <a href="" className="active"></a>
      </div>
      <h2>Product Extras</h2>
      <p>{product.extras}</p>
    </div>
  );
}

export default ProductExtras;