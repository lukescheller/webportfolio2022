import React from "react";
import { Card, Container } from "react-bootstrap";
import tshirt1 from "../images/tshirt1.jpg";
import tshirt2 from "../images/tshirt2.jpg";
import tshirt3 from "../images/tshirt3.jpg";
import tshirt4 from "../images/tshirt4.jpg";
import tshirt5 from "../images/tshirt5.jpg";
import tshirt6 from "../images/tshirt6.jpg";
import ab from "../images/Artboard1.jpg";

const ClothingBig = () => {
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
          href="https://icons8.com/icon/8QPrYbbp4fHX/shirt"
        >
          <img
            alt={{}}
            src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-shirt-tropical-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
          />
        </a>
        Clothing
      </h1>
      <Card style={{ border: "none", gridColumn: "1/-1" }}>
        <Card.Img variant="top" alt={{}} src={ab} />
      </Card>
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={tshirt1} />
      </Card>
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={tshirt2} />
      </Card>
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={tshirt3} />
      </Card>
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={tshirt4} />
      </Card>
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={tshirt5} />
      </Card>
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={tshirt6} />
      </Card>
    </Container>
  );
};

export default ClothingBig;
