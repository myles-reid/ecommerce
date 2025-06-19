import HeaderTop from './components/HeaderTop';
import Header from './components/Header';
import Context from './components/Context';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Catalogue from './components/Catalogue';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Context>
        <Routes>
          <Route exact path="/" element={<Home />} />
            <Route path="/" element={<Catalogue />} />
            <Route path="/product/:id" element={<Product />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer /> 
      </Context>
    </div>
  );
}

export default App;
