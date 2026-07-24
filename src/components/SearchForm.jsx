export default function SearchForm({ onKeywordChange }) {
  return (
    <>
      <h2>검색</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="keyword"
          placeholder="학습 항목 검색"
          onChange={e => onKeywordChange(e.target.value)}
        />
      </div>
    </>
  );
}
