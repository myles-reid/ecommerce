import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductInfo from '../components/ProductInfo';
import { useNavigate } from 'react-router-dom';
import { useAPI } from '../components/Context';
import SimilarProducts from '../components/SimilarProducts';

function Product() {
const { productId } = useParams();
const { data: products, loading } = useAPI();
const [product, setProduct] = useState([]);
const navigate = useNavigate();

useEffect(() => {
      if (loading) { return; }
      const id = Number(productId);
      const foundProduct = products.find(p => p.id === id);
      if (!foundProduct) {
        navigate('/*', { replace: true });
      } else {
        setProduct(foundProduct);
      }
  }, [loading, products, productId, navigate]);

  return (
    <>
      <section className="product-page">
          <ProductInfo product={product} />
          <SimilarProducts category={product.category} id={product.id}/>
      </section>
    </>
  );
}

export default Product;