export default function CategoryFilter({ category, onCategoryChange }) {
  const categories = [
    { value: "all", label: "전체" },
    { value: "concept", label: "concept" },
    { value: "library", label: "library" },
    { value: "hook", label: "hook" },
  ];

  return (
    <>
      <h2>카테고리 필터</h2>
      <div className="d-flex gap-2">
        {categories.map((c, idx) => (
          <button
            key={idx}
            className={`btn btn-light ${c.value === category ? "active" : ""}`}
            onClick={() => onCategoryChange(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>
    </>
  );
}
