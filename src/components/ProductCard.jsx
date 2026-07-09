import { Link } from "react-router-dom";

function ProductCard ({product}) {
    return (
        <div className="product-card">
            <img 
            src={product.image}
            alt={product.name}
            className="product-card-image"
            />

            <div className="product-card-content">
                <span className="product-category">
                    {product.category}
                </span>
                <h3>{product.name}</h3>
                <p>
                    {product.shortDescription}
                </p>

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