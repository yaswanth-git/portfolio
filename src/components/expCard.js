import "../styles/expCard.css";

function ExpCard(props) {
  return (
    <div className="col-md-4 card">
      <div className="col-md-12 card-main">
        <div className="heading">{props.heading}</div>
        <div className="desc">
          <h3>{props.desc}</h3>
          <h4>{props.period}</h4>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;
