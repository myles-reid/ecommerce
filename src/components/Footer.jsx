import React from 'react';

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
          <p>Furniture for Sale</p>
          <p>Previously Sold</p>
          <p>Sell Us Your Old Furnitures</p>
        </div>

        <div className="footer-col">
          <h4>About</h4>
          <p>Our Story</p>
          <p>Why Urban Arc</p>
          <p>Testimonials</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>How to Find Us</p>
          <p>T: +1 (204) 123 4567</p>
          <p>E: info@urbanarc.com</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} Urban Arc</p>
      </div>
    </footer>
  );
}

export default Footer;
