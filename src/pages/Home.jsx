import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import Catalogue from "../components/Catalogue";
import Footer from "../components/Footer";
import FullHeader from "../components/FullHeader";
import { useRef } from "react";

function Home() {
const catalogueRef = useRef(null);

const scrollToCatalogue = () => {
  catalogueRef.current.scrollIntoView({ behavior: 'smooth' });
}

  return (
    <>
    {/* <FullHeader/> */}
    <main className="container">
      <HeroBanner onClick={scrollToCatalogue}/>
      <Carousel />
      <Catalogue ref={catalogueRef}/>
    </main>
    {/* <Footer /> */}
    </>
  );
}

export default Home;