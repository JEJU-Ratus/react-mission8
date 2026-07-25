import { memo } from "react";

function StudyItem({ item, onToggleFavorite, isFavorited }) {
  console.log(`${item.id}번글 렌더`);
  return (
    <>
      <li className="list-group-item">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <p>
          분류 : {item.category} / 난이도 : {item.level}
        </p>
        <button className="btn btn-light" onClick={() => onToggleFavorite(item.id)}>
          {isFavorited ? "즐겨찾기 해제" : "즐겨찾기 추가"}
        </button>
      </li>
    </>
  );
}

export default memo(StudyItem);
