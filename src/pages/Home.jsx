import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">

          <span className="hero-small-title">
            Welcome to MediStore
          </span>

          <h1>
            Your Health,
            <br />
            Our Priority
          </h1>

          <p>
            Browse medicines and healthcare products easily.
            View product information, check common uses,
            create your selected medicine list, and contact
            our medical store directly.
          </p>

          <div className="hero-buttons">

            <Link to="/products">
              <button className="shop-now-btn">
                View Products
              </button>
            </Link>

            <Link to="/contact">
              <button className="hero-contact-btn">
                Contact Us
              </button>
            </Link>

          </div>
        </div>

        <div className="hero-info-card">

          <div className="hero-info-item">
            <span>💊</span>

            <div>
              <h3>Browse Medicines</h3>
              <p>
                Explore products by category.
              </p>
            </div>
          </div>

          <div className="hero-info-item">
            <span>🔍</span>

            <div>
              <h3>Find Products Easily</h3>
              <p>
                Search medicines by name.
              </p>
            </div>
          </div>

          <div className="hero-info-item">
            <span>🛒</span>

            <div>
              <h3>Create Your List</h3>
              <p>
                Add required products to your cart.
              </p>
            </div>
          </div>

          <div className="hero-info-item">
            <span>📞</span>

            <div>
              <h3>Contact the Store</h3>
              <p>
                Call or email for product enquiries.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="home-about">

        <h2>About MediStore</h2>

        <p>
          Welcome to MediStore. We provide a simple way
          to browse available medicines and healthcare
          products. Customers can view product information,
          create a selected product list, and contact the
          store for availability and purchase enquiries.
        </p>

        <Link to="/about">
          <button className="read-more-btn">
            Read More
          </button>
        </Link>

      </section>


      {/* PRODUCTS SECTION */}
      <section className="featured-products">

        <h2>Featured Products</h2>

        <p className="section-description">
          Browse some of our available healthcare products.
        </p>

        <div className="products-grid">

          {products.slice(0, 6).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="view-all-container">

          <Link to="/products">
            <button className="view-all-btn">
              View All Products
            </button>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;