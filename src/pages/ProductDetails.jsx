import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="product-details-page">
      <div className="product-details-container">

        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-details-info">

          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <h3>Product Description</h3>

          <p>{product.description}</p>

          <h3>Common Uses</h3>

          <ul>
            {product.uses.map((use, index) => (
              <li key={index}>
                {use}
              </li>
            ))}
          </ul>

          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;