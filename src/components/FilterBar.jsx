import "../styles/filters.css";

export default function FilterBar({ filters, setFilters, categories, months }) {
  function update(key, value) {
    setFilters({ ...filters, [key]: value });
  }

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search transactions..."
        value={filters.search}
        onChange={(e) => update("search", e.target.value)}
        className="filter-search"
      />

      <select value={filters.type} onChange={(e) => update("type", e.target.value)}>
        <option value="all">All Types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select value={filters.category} onChange={(e) => update("category", e.target.value)}>
        <option value="all">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={filters.month} onChange={(e) => update("month", e.target.value)}>
        <option value="all">All Months</option>
        {months.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
}