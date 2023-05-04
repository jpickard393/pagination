import "./row.css";
const Row = ({ item }) => {
  return (
    <div className="container">
      <div className="idColumn">{item.id}</div>
      <div className="userIdColumn">{item.userId}</div>
      <div className="titleColumn">{item.title}</div>
      <div className="idColumn">{item.complete ? "YES" : "NO"}</div>
    </div>
  );
};

export default Row;
