import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductInfo from '../components/ProductInfo';

function Product() {
const { productId } = useParams();


  return (
    <>
    <ProductInfo productId={Number(productId)} />
    </>
  );
}

export default Product;