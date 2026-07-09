function Contact({ cart }) {
  return (
    <div className="contact-page">
      <div className="contact-heading">
        <h1>Contact Us</h1>

        <p>
          Contact our medical store for product availability
          and purchase enquiries.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <h2>Get In Touch</h2>

          <div className="contact-info-box">
            <h3>📞 Phone Number</h3>
            <p>+9176766 10216</p>
          </div>

          <div className="contact-info-box">
            <h3>✉️ Email Address</h3>
            <p>rafatkousar2003@gmail.com</p>
          </div>

          <div className="contact-info-box">
            <h3>📍 Store Address</h3>
            <p>
              Bijapur, Karnataka
            </p>
          </div>

          <div className="contact-info-box">
            <h3>🕒 Store Timings</h3>
            <p>Monday - Saturday: 9:00 AM - 9:00 PM</p>
            <p>Sunday: 10:00 AM - 6:00 PM</p>
          </div>
          {cart.length > 0 && (
  <div className="selected-products-contact">
    <h2>Your Selected Medicines</h2>

    {cart.map((product) => (
      <div
        className="selected-contact-item"
        key={product.id}
      >
        <img
          src={product.image}
          alt={product.name}
        />

        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>
      </div>
    ))}
  </div>
)}
        </div>

        <div className="contact-message">
          <h2>How to Buy Products?</h2>

          <p>
            1. Browse the medicines available on our website.
          </p>

          <p>
            2. Click View Details to read the product
            description and common uses.
          </p>

          <p>
            3. Click Add to Cart to add the medicine to
            your selected products list.
          </p>

          <p>
            4. Open your cart and review all selected products.
          </p>

          <p>
            5. Contact our store using the phone number or
            email address shown here.
          </p>

          <div className="contact-action-buttons">

  <a
    href="tel:+917676610216"
    className="call-btn"
  >
    📞 Call Store
  </a>

  <a
    href="mailto:rafatkousar2003@gmail.com?subject=Medicine%20Enquiry"
    className="email-btn"
  >
    ✉️ Send Email
  </a>

</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;