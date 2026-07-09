import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = [
    "All",
    "Allergy",
    "Blood Pressure",
    "Diabetes",
    "Pain Relief",
    "Cholesterol",
    "Acidity"
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      <div className="products-heading">
        <h1>Our Products</h1>

        <p>
          Browse medicines by category or search by medicine name.
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

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "category-btn active-category"
                : "category-btn"
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>
        ))}
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
            Try another medicine name or category.
          </p>
        </div>
      )}
    </div>
  );
}

export default Products;