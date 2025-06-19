import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { useAPI } from './Context';

function HeaderTop() {
  const { cart } = useAPI();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="top-header">
      <div className="container top-header-inner">
        <div className="header-left">
          <span className="left-msg">Free Delivery over $99!</span>
        </div>

        <div className="header-center">
          <div className="search-wrapper">
            <input type="text" placeholder="Search..." className="search-input" />
            <FaSearch className="search-icon" />
          </div>
        </div>

        <div className="header-right">
          <Link to="/cart" className="icon-button" style={{ position: 'relative' }}>
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </Link>
          <Link to="/login" className="icon-button">
            <FaUser />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
