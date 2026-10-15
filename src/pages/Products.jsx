
import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProducts = products.filter((product) => {
    return product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div className="products-page">
      <div className="products-heading">
        <h1>Our Products</h1>
        <p>
          Browse medicines or search by medicine name.
        </p>
      </div>

      <div className="product-search-box">
        <input
          type="text"
          placeholder="Search medicine by name..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="no-products-found">
          <h2>No medicine found</h2>
          <p>
            Try another medicine name.
          </p>
        </div>
      )}
    </div>
  );
}

export default Products;
