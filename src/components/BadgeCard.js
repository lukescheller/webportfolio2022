import React, { useState } from "react";

const BadgeCard = (props) => {
  const [badgeColor, setBadgeColor] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputControl, setInputControl] = useState(false);

  const formInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.toLowerCase() === props.answer) {
      setBadgeColor(true);
      setInputValue("");
      setInputControl(true);
    } else {
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
      <form onSubmit={onSubmitHandler}>
        <div
          style={{
            height: "100px",
            overflow: "scroll",
          }}
        >
          <h4>{props.question}</h4>
        </div>
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
