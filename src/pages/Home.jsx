import HeroBanner from "../components/HeroBanner";
import ProductInfo from "../components/ProductInfo";

function Home() {
  return (
    <main className="container">
      <ProductInfo productId={18} /> {/* Replace 1 with the actual product ID you want to display */}
    </main>
  );
}

export default Home;