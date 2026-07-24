import { useState } from "react";
import "./App.css";
import { SearchForm } from "./components/SearchForm";
import { CategoryFilter } from "./components/CategoryFilter";

function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  console.log(keyword);
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
      </div>
    </>
  );
}

export default App;
