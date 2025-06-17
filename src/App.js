import Context from './components/Context';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Context>
        <Home />
      </Context>
    </div>
  )
};

export default App;
