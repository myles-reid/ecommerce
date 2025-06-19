import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="store-footer">
      <div className="footer-top container">
        <div className="footer-col">
          <h4>Join our <strong>Newsletter</strong></h4>
          <p>Receive our latest updates.</p>
          <input type="email" placeholder="Email address" className="footer-input" />
          <button className="join-button">Join</button>
        </div>

       <div className="footer-col">
          <h4>Our Service</h4>
          <p><Link to="/products">Browse Products</Link></p>
          <p><Link to="/products">Previously Sold</Link></p>
          <p><Link to="/contact">Sell Us Your Old Jewelry</Link></p>
        </div>

        <div className="footer-col">
          <h4>About</h4>
          <p><Link to="/about">Our Story</Link></p>
          <p><Link to="/about">Why Urban Arc</Link></p>
          <p><Link to="/about">Testimonials</Link></p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p><Link to="/contact">How to Find Us</Link></p>
          <p>
            T: <a href="tel:+12041234567">+1 (204) 123 4567</a>
          </p>
          <p>
            E: <a href="mailto:info@urbanarc.com">info@urbanarc.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} Urban Arc</p>
      </div>
    </footer>
  );
}

export default Footer;
