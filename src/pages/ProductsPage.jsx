import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import useDebounce from "../hooks/useDebounce";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    inStock: searchParams.get("inStock") === "true",
    search: searchParams.get("search") || "",
    sort: searchParams.get("sort") || "",
  });

  const debouncedSearch = useDebounce(filters.search, 500);

  // Sync filters → URL
  useEffect(() => {
    const params = {};

    if (filters.category) params.category = filters.category;
    if (filters.inStock) params.inStock = true;
    if (filters.search) params.search = filters.search;
    if (filters.sort) params.sort = filters.sort;

    setSearchParams(params);
  }, [filters, setSearchParams]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      return (
        (filters.category ? p.category === filters.category : true) &&
        (!filters.inStock || p.inStock) &&
        p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    });

    // Sorting
    if (filters.sort === "lowToHigh") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "highToLow") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters, debouncedSearch]);

  // Clear filters
  const clearFilters = () => {
    setFilters({
      category: "",
      inStock: false,
      search: "",
      sort: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      {/* Filters Sidebar */}
      <div style={{ width: "25%", borderRight: "1px solid #ddd" }}>
        <Filters
          filters={filters}
          setFilters={setFilters}
          clearFilters={clearFilters}
        />
      </div>

      {/* Products Section */}
      <div style={{ width: "75%", padding: "20px" }}>
        <h2 style={{ marginBottom: "20px" }}>Product Filtering System</h2>

        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
        )}
      </div>
    </div>
  );
}
