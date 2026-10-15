import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <>
      <header className="top-header">
        <Link to="/" className="logo">
          <span className="logo-green">MEDI</span>
          <span className="logo-blue">STORE</span>
        </Link>

        <Link to="/cart" className="header-cart">
          🛒 Your Cart ({cartCount})
        </Link>
      </header>

      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;