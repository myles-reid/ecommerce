import Context from './components/Context';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import FullHeader from './components/FullHeader';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Context>
        <FullHeader/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Context>
    </div>
  );
}

export default App;
