import HeroBanner from "../components/HeroBanner";
import ProductInfo from "../components/ProductInfo";
import Carousel from "../components/Carousel";
import { useState } from "react";

function Home() {


  return (
    <main className="container">
      {/* <ProductInfo productId={18} /> Replace 1 with the actual product ID you want to display */}
      <Carousel />
    </main>
  );
}

export default Home;