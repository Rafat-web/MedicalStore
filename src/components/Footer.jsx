import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h2>MEDISTORE</h2>

        <p>
          Browse medicines and healthcare products,
          view product information, add products to your
          cart, and contact our store for enquiries.
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>

        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>

        <p>📞 +91 7676610216</p>

        <p>✉️ rafatkousar2003@gmail.com</p>

        <p>📍 Bijapur, Karnataka</p>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 MediStore. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;