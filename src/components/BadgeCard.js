import React, { useState } from "react";

const BadgeCard = (props) => {
  const [badgeColor, setBadgeColor] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputControl, setInputControl] = useState(false);
  const [testResult, setTestResult] = useState("");
  const [testResultColor, setTestResultColor] = useState(null);

  const formInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.toLowerCase() === props.answer) {
      setTestResult("correct");
      setTestResultColor(true);
      setBadgeColor(true);
      setInputValue("");
      setInputControl(true);
    } else {
      setTestResult("False");
      setTestResultColor(false);
      setBadgeColor(false);
      setInputValue("");
    }
  };

  return (
    <div
      key={props.id}
      style={{
        border: "1px solid black",
        padding: "5px",
        borderRadius: "25px",
      }}
      className="p-3 mb-2 bg-light text-dark"
    >
      <img
        src={require(`../images/${props.img}`)}
        height={"250px"}
        style={!badgeColor ? { filter: "grayscale(100%)" } : {}}
      />
      <div
        style={
          testResultColor
            ? { backgroundColor: "green", color: "white", borderRadius: "10px" }
            : { backgroundColor: "red", color: "white", borderRadius: "10px" }
        }
      >
        {testResult}
      </div>
      <form onSubmit={onSubmitHandler}>
        <div
          style={
            {
              // border: "1px solid black",
            }
          }
        >
          <div style={{}}>
            <p
              style={{
                // HOW TO CENTER TEXT WITHIN A DIV...............AND IT'LL ADJUST TO THE SIZE OF THE DIV
                display: "flex",
                justifyContent: "center",
                border: "1px solid transparent",
                margin: "auto",
                textAlign: "justify",
              }}
            >
              {props.question}
            </p>
          </div>
        </div>
        <br />
        <input
          type="text"
          style={{ margin: "10px", borderRadius: "5px" }}
          onChange={formInputHandler}
          value={inputValue}
          disabled={inputControl}
        ></input>
        <br />
        <button
          className="btn btn-success"
          type="submit"
          disabled={inputControl}
          style={{ marginBottom: "10px" }}
        >
          Answer
        </button>
      </form>
    </div>
  );
};

export default BadgeCard;
