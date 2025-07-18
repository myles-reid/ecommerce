import Context from './components/Context';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import FullHeader from './components/FullHeader';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { useRef } from 'react';

function App() {
  const catalogueRef = useRef(null);
  const scrollToCatalogue = () => {
    if (catalogueRef.current !== null){
      catalogueRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Context>
        <FullHeader onClick={scrollToCatalogue}/>
        <Routes>
          <Route exact path="/" element={<Home ref={catalogueRef} onClick={scrollToCatalogue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Context>
    </div>
  );
}

export default App;
