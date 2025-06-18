import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import Catalogue from "../components/Catalogue";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";
import { useRef } from "react";

function Home() {
const catalogueRef = useRef(null);

const scrollToCatalogue = () => {
  catalogueRef.current.scrollIntoView({ behavior: 'smooth' });
}

  return (
    <>
    <HeaderTop/>
    <Header />
    <main className="container">
      <HeroBanner onClick={scrollToCatalogue}/>
      {/* <ProductInfo productId={18} /> Replace 1 with the actual product ID you want to display */}
      <Carousel />
      <Catalogue ref={catalogueRef}/>
    </main>
    <Footer />
    </>
  );
}

export default Home;