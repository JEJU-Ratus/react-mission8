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
    [keyword, category],
  );

  const handleToggleFavorite = _id => {
    setFavoriteIds(prev =>
      prev.includes(_id) ? prev.filter(itemId => itemId !== _id) : [...prev, _id],
    );
  };
  console.log(favoriteIds);
  return (
    <>
      <div className="container">
        <h1>React Mission 8</h1>
        <div className="card p-2">
          <SearchForm onKeywordChange={setKeyword} />
        </div>
        <div className="card p-2">
          <CategoryFilter category={category} onCategoryChange={setCategory} />
        </div>
        <div className="card p-2">
          <StudyList filteredData={filteredData} onToggleFavorite={handleToggleFavorite} />
        </div>
      </div>
    </>
  );
}

export default App;
