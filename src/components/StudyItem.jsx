export default function StudyItem({ item, onToggleFavorite }) {
  return (
    <>
      <li className="list-group-item">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <p>
          분류 : {item.category} / 난이도 : {item.level}
        </p>
        <button className="btn btn-light" onClick={() => onToggleFavorite(item.id)}>
          즐겨찾기 추가
        </button>
      </li>
    </>
  );
}
