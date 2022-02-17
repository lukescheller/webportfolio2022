import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BadgeCard from "./BadgeCard";

const CodeSmall = (props) => {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "10px",
        rowGap: "10px",
      }}
    >
      <h1
        style={{
          gridColumn: "1/-1",
          borderBottom: "1px solid black",
          color: "black",
          display: "inline-block",
          textAlign: "left",
          fontWeight: "lighter",
          padding: "10px",
          margin: "10px",
          marginBottom: "50px",
        }}
      >
        <a
          style={{ marginRight: "10px" }}
          href="https://icons8.com/icon/79952/pokeball"
        >
          <img
            alt={{}}
            src="https://img.icons8.com/ios-glyphs/60/000000/pokeball.png"
          />
        </a>
        Pokemon - Indigo League (PokeAPI.co)
      </h1>
      {props.data.map((data) => (
        <BadgeCard
          id={data.id}
          img={data.img}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </Container>
  );
};

export default CodeSmall;
