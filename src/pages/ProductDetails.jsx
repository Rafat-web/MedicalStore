
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ products = [], addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => String(item.id) === id
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>Please return to the Products page and try again.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  const imageSrc = product.image
    ? product.image.startsWith("/")
      ? product.image
      : `/images/${product.image}`
    : "/images/medicine-placeholder.png";

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        
<div className="product-details-image">
  <img
    src={
      product.image
        ? product.image.startsWith("/med/")
          ? product.image
          : product.image.startsWith("/")
            ? `/med${product.image}`
            : `/med/images/${product.image}`
        : ""
    }
    alt={product.name}
    onError={(event) => {
      event.currentTarget.style.visibility = "hidden";
    }}
  />
</div>


        <div className="product-details-info">
          <h1>{product.name}</h1>

          <h3>Product Description</h3>
          <p>{product.description}</p>

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
