import StudyItem from "./StudyItem";

export default function StudyList({ filteredData }) {
  return (
    <>
      <h2>학습목록</h2>
      <ul className="list-group">
        {filteredData.map(item => (
          <StudyItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
