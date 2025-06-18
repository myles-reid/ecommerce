import HeroBanner from "../components/HeroBanner";
import ProductInfo from "../components/ProductInfo";
import Carousel from "../components/Carousel";
import { useState } from "react";
import Catalogue from "../components/Catalogue";

function Home() {


  return (
    <main className="container">
      <HeroBanner/>
      {/* <ProductInfo productId={18} /> Replace 1 with the actual product ID you want to display */}
      <Carousel />
      <Catalogue />
    </main>
  );
}

export default Home;