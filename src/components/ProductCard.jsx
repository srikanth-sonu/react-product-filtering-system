import React from "react";

function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        transition: "0.2s",
      }}
    >
      <h3 style={{ margin: "0 0 5px" }}>{product.name}</h3>

      <p style={{ margin: "5px 0", color: "#555" }}>
        Category: {product.category}
      </p>

      <p style={{ margin: "5px 0", fontWeight: "bold" }}>₹{product.price}</p>

      <p style={{ margin: "5px 0", color: "#777" }}>
        Rating: ⭐ {product.rating}
      </p>

      <span
        style={{
          display: "inline-block",
          marginTop: "5px",
          padding: "4px 8px",
          borderRadius: "5px",
          fontSize: "12px",
          backgroundColor: product.inStock ? "#d1fae5" : "#fee2e2",
          color: product.inStock ? "#065f46" : "#991b1b",
        }}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default React.memo(ProductCard);
