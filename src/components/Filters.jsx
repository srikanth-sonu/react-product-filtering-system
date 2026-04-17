export default function Filters({ filters, setFilters, clearFilters }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9fafb",
        height: "100vh",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Filters</h3>

      {/* Search */}
      <div style={{ marginBottom: "20px" }}>
        <label>Search</label>
        <input
          type="text"
          placeholder="Search..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Category */}
      <div style={{ marginBottom: "20px" }}>
        <label>Category</label>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "6px",
          }}
        >
          <option value="">All</option>
          <option value="mobile">Mobile</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>

      {/* Sorting */}
      <div style={{ marginBottom: "20px" }}>
        <label>Sort by Price</label>
        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "6px",
          }}
        >
          <option value="">None</option>
          <option value="lowToHigh">Low → High</option>
          <option value="highToLow">High → Low</option>
        </select>
      </div>

      {/* Stock */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) =>
              setFilters({ ...filters, inStock: e.target.checked })
            }
          />
          <span style={{ marginLeft: "8px" }}>In Stock Only</span>
        </label>
      </div>

      {/* Clear */}
      <button
        onClick={clearFilters}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#ef4444",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Clear Filters
      </button>
    </div>
  );
}
