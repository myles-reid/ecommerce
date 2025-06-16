import React from 'react';
import Context from './Context';
import Catalogue from './components/Catalogue';

function App() {
  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];
  
  return (
    <Context>
      <h1 style={{ textAlign: 'center' }}>Our Catalogue</h1>
      <Catalogue />
    </Context>
  );
}

export default App;
