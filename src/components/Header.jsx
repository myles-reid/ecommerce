import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="main-header">
    <div className="container flex flex-between center">
      <h1 className="store-name"><Link to="/">Urban Arc</Link></h1>
      <nav className="nav-links">
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </div>
  );
}

export default Header;
