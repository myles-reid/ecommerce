import { useAPI } from '../components/Context';
import { Link } from 'react-router-dom';
import '../css/cart.css';

function Cart() {
  const { cart, removeFromCart, clearCart } = useAPI();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="cart-empty container">
        <h2>Your Cart is Empty</h2>
        <Link to="/" className="shop-cart-btn">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="cart-img-wrapper">
              <img src={item.image} alt={item.title} className="cart-img" />
            </div>
            <div className="cart-info">
              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <p>Size: {item.siz}</p>
                <p>Qty: {item.quantity || 1}</p>
              </div>
              <button onClick={() => removeFromCart(item.id, item.size)} className="remove-btn">
                Remove
              </button>     
            </div>
          </li>
        ))}
      </ul>
       <div className="cart-summary">
        <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p><strong>Tax (13%):</strong> ${tax.toFixed(2)}</p>
        <hr />
        <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      </div>
      <button onClick={clearCart} className="clear-btn">Clear Cart</button>
    </div>
  );
}

export default Cart;
