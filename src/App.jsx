import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import CategoryFilter from "./components/CategoryFilter";
import StudyData from "./data/data.json";
import StudyList from "./components/StudyList";
import StudySummary from "./components/StudySummary";

function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const searchInputRef = useRef(null);
  const renderCount = useRef(0);
  renderCount.current += 1; // 앱이 렌더될때마다 재실행 됨.

  const filteredData = useMemo(
    () =>
      StudyData.filter(item => {
        const matchedKeyword = item.title.toLowerCase().includes(keyword.toLowerCase());
        const matchedCategory = category === "all" || item.category === category;
        const matchedFavorite = !favoriteOnly || favoriteIds.includes(item.id);
        return matchedCategory && matchedKeyword && matchedFavorite;
      }),
    [keyword, category, favoriteIds, favoriteOnly],
  );

  const handleToggleFavorite = useCallback(_id => {
    setFavoriteIds(prev =>
      prev.includes(_id) ? prev.filter(itemId => itemId !== _id) : [...prev, _id],
    );
  }, []);
  const handleFocusSearch = () => {
    searchInputRef.current.focus();
  };
  useEffect(() => {
    handleFocusSearch();
  }, []);
  const summary = {
    total: StudyData.length,
    visible: filteredData.length,
    favorite: favoriteIds.length,
  };
  const handleReset = () => {
    setKeyword("");
    setCategory("all");
    setFavoriteIds([]);
    setFavoriteOnly(false);
    searchInputRef.current.value = "";
  };
  return (
    <>
      <div className="container">
        <h1>React Mission 8</h1>
        <div className="card p-2">
          <SearchForm
            onKeywordChange={setKeyword}
            inputRef={searchInputRef}
            onFocusSearch={handleFocusSearch}
            onReset={handleReset}
          />
        </div>
        <div className="card p-2">
          <CategoryFilter category={category} onCategoryChange={setCategory} />
          <button
            className={`btn mt-2 ${favoriteOnly ? "btn-secondary active" : "btn-primary"}`}
            onClick={() => setFavoriteOnly(prev => !prev)}
          >
            {/* 현재 보기 상태에서 반대로 보여야 하기 때문에 true일때 전체항목 보기 활성화, false일때는 즐겨찾기 보기 활성화 */}
            {favoriteOnly ? "전체항목 보기" : "즐겨찾기만 보기"}
          </button>
        </div>
        <div className="card p-2">
          <StudySummary summary={summary} renderCount={renderCount} />
        </div>
        <div className="card p-2">
          <StudyList
            filteredData={filteredData}
            onToggleFavorite={handleToggleFavorite}
            favoriteIds={favoriteIds}
          />
        </div>
      </div>
    </>
  );
}

export default App;
