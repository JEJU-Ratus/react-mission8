export default function StudyItem({ item }) {
  return (
    <>
      <li className="list-group-item">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <p>
          분류 : {item.category} / 난이도 : {item.level}
        </p>
      </li>
    </>
  );
}
