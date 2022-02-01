import React from "react";
import { Container, Card } from "react-bootstrap";
import magazine from "../images/magazine.jpg";
import magazine2 from "../images/magazine2.jpg";

const InDesign = () => {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        // border: "1px solid black",
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
          fontWeight: "lighter",
          padding: "10px",
          margin: "10px",
          marginBottom: "50px",
        }}
      >
        <a
          style={{ marginRight: "10px" }}
          href="https://icons8.com/icon/101693/adobe-indesign"
        >
          <img
            alt={{}}
            src="https://img.icons8.com/ios-glyphs/60/000000/adobe-indesign.png"
          />
        </a>
        InDesign
      </h1>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={magazine} />
      </Card>

      <Card
        style={{
          border: "none",
          gridColumn: "1/-1",
          marginBottom: "100px",
        }}
      >
        <Card.Img variant="top" alt={{}} src={magazine2} />
      </Card>
    </Container>
  );
};

export default InDesign;
