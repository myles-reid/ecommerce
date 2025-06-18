import Context from './components/Context';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Catalogue from './components/Catalogue';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div>
      <Context>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Context>
    </div>
  );
}
export default App;
