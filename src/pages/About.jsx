function About() {
  return (
    <div className="about-page">

      <div className="about-header">
        <h1>About Us</h1>

        <p>
          Welcome to MediStore, your trusted destination
          for medicines and healthcare products.
        </p>
      </div>

      <div className="about-container">

        <section className="about-section">
          <h2>Who We Are</h2>

          <p>
            MediStore is a medical store website designed
            to help customers easily browse available
            medicines and healthcare products.
          </p>

          <p>
            Customers can view product images, medicine
            names, descriptions, and common uses. They can
            add products to their cart and contact the
            medical store for product availability and
            purchase enquiries.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>

          <p>
            Our mission is to make it simple and convenient
            for customers to find information about available
            healthcare products and contact the store easily.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Provide</h2>

          <div className="service-grid">

            <div className="service-card">
              <h3>💊 Medicine Information</h3>

              <p>
                View medicine names, images, descriptions,
                categories, and common uses.
              </p>
            </div>

            <div className="service-card">
              <h3>🛒 Product Selection</h3>

              <p>
                Add required products to your cart and
                review your selected product list.
              </p>
            </div>

            <div className="service-card">
              <h3>📞 Easy Contact</h3>

              <p>
                Contact the medical store directly by phone
                or email for product availability and
                purchase enquiries.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default About;