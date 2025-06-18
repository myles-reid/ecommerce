import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import Catalogue from "../components/Catalogue";
import { useRef } from "react";

function Home() {
const catalogueRef = useRef(null);

const scrollToCatalogue = () => {
  catalogueRef.current.scrollIntoView({ behavior: 'smooth' });
}

  return (
    <>
    <main className="container">
      <HeroBanner onClick={scrollToCatalogue}/>
      <Carousel />
      <Catalogue ref={catalogueRef}/>
    </main>
    </>
  );
}

export default Home;