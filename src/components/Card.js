const Card = (props) => {
  return (
    <div
      className="card"
      style={{
        width: "400px",
        height: "200px",
        padding: "26px 36px",
        borderRadius: "8px",
        backgroundColor: props.bgcolor,
      }}
    >
      <div className="card-icn">
        <img src={props.icn} alt="multilingual" />
      </div>
      <div className="card-title" style={{ padding: "20px 0px" }}>
        <h3>{props.title}</h3>
      </div>
      <div className="card-text">
        <p style={{ fontSize: "16px" }}>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
