import HeaderTop from './components/HeaderTop';
import Header from './components/Header';
import Context from './components/Context';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Context>
      <HeaderTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> 
    </Context>
  );
}

export default App;
