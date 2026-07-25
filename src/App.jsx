import { useMemo, useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import CategoryFilter from "./components/CategoryFilter";
import StudyData from "./data/data.json";
import StudyList from "./components/StudyList";

function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const filteredData = useMemo(
    () =>
      StudyData.filter(item => {
        const matchedKeyword = item.title.toLowerCase().includes(keyword.toLowerCase());
        const matchedCategory = category === "all" || item.category === category;
        return matchedCategory && matchedKeyword;
      }),
    [keyword, category, favoriteIds, favoriteOnly],
  );

  const handleToggleFavorite = _id => {
    setFavoriteIds(prev =>
      prev.includes(_id) ? prev.filter(itemId => itemId !== _id) : [...prev, _id],
    );
  };
  return (
    <>
      <div className="container">
        <h1>React Mission 8</h1>
        <div className="card p-2">
          <SearchForm onKeywordChange={setKeyword} />
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
