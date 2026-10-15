
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const imagePath = product.image
    ? product.image.startsWith("/")
      ? product.image.startsWith("/med/")
        ? product.image
        : `/med${product.image}`
      : `/med/images/${product.image}`
    : "";

  return (
    <div className="product-card">
      {imagePath && (
        <img
          src={imagePath}
          alt={product.name}
          className="product-card-image"
        />
      )}

      <div className="product-card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <Link
          to={`/product/${product.id}`}
          className="view-details-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
