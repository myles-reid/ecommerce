import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAPI } from '../components/Context';
import ProductInfo from '../components/ProductInfo';
import SimilarProducts from '../components/SimilarProducts';
import ProductExtras from '../components/ProductExtras';

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

  useEffect(()=> {
    //Just here to ensure that the page sets to the top when loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="product-page">
          <ProductInfo product={product} />
          <ProductExtras product={product} />
          <SimilarProducts category={product.category} id={product.id}/>
      </section>
    </>
  );
}

export default Product;