import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/Carousel";
import Catalogue from "../components/Catalogue";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home({ ref, onClick }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToCatalogue && ref && ref.current) {
      onClick();
      window.history.replaceState({}, document.title);
    }
  }, [location, ref])

  return (
    <>
    <main className="container">
      <HeroBanner onClick={onClick}/>
      <Carousel />
      <Catalogue ref={ref}/>
    </main>
    </>
  );
}

export default Home;