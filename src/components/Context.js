import axios from 'axios';
import { createContext, useState, useEffect, useContext } from 'react';

const APIContext = createContext('');

function Context({ children }) {
  const URL = 'https://fakestoreapi.com/products';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });  

   const addToCart = (item) => {
    const size = item.size || 'Default';
    const existingIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id && cartItem.size === size
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += item.quantity || 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, size, quantity: item.quantity || 1 }]);
    }
  };

   const removeFromCart = (id, size) => {
    setCart((prevCart) =>
      prevCart.flatMap((item) => {
        if (item.id === id && item.size === size) {
          if (item.quantity > 1) {
            return [{ ...item, quantity: item.quantity - 1 }];
          }
          return [];
        }
        return [item];
      })
    );
  };

  const clearCart = () => setCart([]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));  
  }, []);

  return (
    <APIContext.Provider value={{ data, loading, cart, addToCart, removeFromCart, clearCart }}>
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