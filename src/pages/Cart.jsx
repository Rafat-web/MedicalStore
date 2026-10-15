
import { useNavigate } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();

  const getImagePath = (image) => {
    if (!image) return "";

    if (image.startsWith("/med/")) {
      return image;
    }

    if (image.startsWith("/")) {
      return `/med${image}`;
    }

    return `/med/images/${image}`;
  };

  return (
    <div className="cart-page">
      <h1>Your Selected Products</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <p>
            Select medicines from the Products page.
          </p>

          <button onClick={() => navigate("/products")}>
            View Products
          </button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((product) => (
              <div
                className="cart-item"
                key={product.id}
              >
                {product.image && (
                  <img
                    src={getImagePath(product.image)}
                    alt={product.name}
                    onError={(event) => {
                      event.currentTarget.style.visibility =
                        "hidden";
                    }}
                  />
                )}

                <div className="cart-item-info">
                  <h2>{product.name}</h2>

                  {product.category && (
                    <p className="cart-category">
                      {product.category}
                    </p>
                  )}

                  <p>
                    {product.shortDescription ||
                      product.description}
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-contact-section">
            <h2>Want to buy these products?</h2>

            <p>
              Contact our medical store to ask about
              product availability and purchase details.
            </p>

            <button
              className="contact-store-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
