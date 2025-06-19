import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { useAPI } from './Context';
import { useState } from 'react';

function HeaderTop() {
  const { cart, data } = useAPI();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const match = data.find(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (match) {
      navigate(`/product/${match.id}`);
    } else {
      navigate('/not-found');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="top-header">
      <div className="container top-header-inner">
        <div className="header-left">
          <span className="left-msg">Free Delivery over $99!</span>
        </div>

        <div className="header-center">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <FaSearch className="search-icon" onClick={handleSearch} style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <div className="header-right">
          <Link to="/cart" className="icon-button">
            <FaShoppingCart />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
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
