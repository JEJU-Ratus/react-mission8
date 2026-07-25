import StudyItem from "./StudyItem";

export default function StudyList({ filteredData, onToggleFavorite, favoriteIds }) {
  return (
    <>
      <h2>학습목록</h2>
      <ul className="list-group">
        {filteredData.map(item => (
          <StudyItem
            key={item.id}
            item={item}
            onToggleFavorite={onToggleFavorite}
            isFavorited={favoriteIds.includes(item.id)}
          />
        ))}
      </ul>
    </>
  );
}
