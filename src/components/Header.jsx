import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header({ onClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      onClick();
    } else {
      navigate('/', {state: { scrollToCatalogue: true }});
    }
  }
  return (
    <div className="main-header">
    <div className="container flex flex-between center">
      <h1 className="store-name"><Link to="/">Urban Arc</Link></h1>
      <nav className="nav-links">
        <a href="" onClick={handleNavigation}>Products</a>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </div>
  );
}

export default Header;
