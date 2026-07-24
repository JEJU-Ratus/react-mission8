import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import CategoryFilter from "./components/CategoryFilter";
import StudyData from "./data/data.json";
import StudyList from "./components/StudyList";

console.log(StudyData);
function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);

  const filteredData = StudyData.filter(item => {
    const matchedKeyword = item.title.toLowerCase().includes(keyword.toLowerCase());
    const matchedCategory = category === "all" || item.category === category;
    return matchedCategory && matchedKeyword;
  });
  console.log(filteredData);
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
          <StudyList filteredData={filteredData} />
        </div>
      </div>
    </>
  );
}

export default App;
