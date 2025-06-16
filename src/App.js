import Context from './components/Context';
import ProductList from './components/ProductList';

function App() {
  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];
  
  return (
    <div>
      <Context>
        <h1 style={{ textAlign: 'center' }}>Our Catalogue</h1>
        <Catalogue />
        <ProductList />
      </Context>
    </div>
  );
}
export default App;
