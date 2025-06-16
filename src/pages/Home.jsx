import HeroBanner from "../components/HeroBanner";
import ProductInfo from "../components/ProductInfo";

function Home() {
  return (
    <main className="container">
      <HeroBanner />
      <ProductInfo productId={20} /> {/* Replace 1 with the actual product ID you want to display */}
    </main>
  );
}

export default Home;