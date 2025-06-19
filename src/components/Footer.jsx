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
          <p><a href="">Furniture for Sale</a></p>
          <p><a href="">Previously Sold</a></p>
          <p><a href="">Sell Us Your Old Furnitures</a></p>
        </div>

        <div className="footer-col">
          <h4>About</h4>
          <p><a href="">Our Story</a></p>
          <p><a href="">Why Urban Arc</a></p>
          <p><a href="">Testimonials</a></p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p><a href="">How to Find Us</a></p>
          <p>T: <a href="">+1 (204) 123 4567</a></p>
          <p>E: <a href="mailto:info@urbanarc.com">info@urbanarc.com</a></p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} Urban Arc</p>
      </div>
    </footer>
  );
}

export default Footer;
