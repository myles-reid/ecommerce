import Context from './components/Context';
import Catalogue from './components/Catalogue';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {  
  
  return (
    <div>
      <Context>
        <h1 style={{ textAlign: 'center' }}>Our Catalogue</h1>
        <Catalogue />
        {/* <ProductList /> */}
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Context>
    </div>
  );
}
export default App;
