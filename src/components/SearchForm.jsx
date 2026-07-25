export default function SearchForm({ onKeywordChange, inputRef, onFocusSearch }) {
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
          ref={inputRef}
        />
        <div className="mt-2">
          <button className="btn btn-light" onClick={onFocusSearch}>
            검색창으로 이동
          </button>
          <button className="btn btn-light">초기화</button>
        </div>
      </div>
    </>
  );
}
