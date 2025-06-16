import Context from './components/Context';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <Context>
        <ProductList />
      </Context>
    </div>
  )
};

export default App;
