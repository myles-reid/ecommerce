import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react';

const APIContext = createContext('');

function Context({ children }) {
  const URL = 'https://fakestoreapi.com/products';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

   const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));  
  }, []);

  return (
    <APIContext.Provider value={{ data, loading,cart, addToCart }}>
      {children}
    </APIContext.Provider>
  )
}

export default Context;

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}