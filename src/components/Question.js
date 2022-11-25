import React, { useState } from "react";
import minus from "./img/minus-circle.svg";
import plus from "./img/plus-circle.svg";
import "./styles/Question.css";
const Question = (props) => {
  const [showans, setshowans] = useState(false);
  const SetAns = () => {
    console.log(showans);
    setshowans(!showans);
  };
  return (
    <div className="question">
      <div className="q-title">
        <div className="title-text">
          <h3>{props.quest}</h3>
        </div>
        <div className="q-img">
          {!showans && <img src={plus} alt="open" onClick={SetAns} />}
          {showans && <img src={minus} alt="close" onClick={SetAns} />}
        </div>
      </div>
      <div className="q-answwer">{showans && <p>{props.ans}</p>}</div>
    </div>
  );
};

export default Question;
