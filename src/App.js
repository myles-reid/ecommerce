import React from 'react';
import Context from './Context';
import Catalogue from './components/Catalogue';

function App() {
  return (
    <Context>
      <h1 style={{ textAlign: 'center' }}>Our Catalogue</h1>
      <Catalogue />
    </Context>
  );
}

export default App;
