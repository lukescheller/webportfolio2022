import React from "react";
import { Card, Container } from "react-bootstrap";
import eye from "../images/eye.jpg";
import tree from "../images/tree.jpg";
import face1 from "../images/face1.jpg";
import face2 from "../images/face2.jpg";
import hand1 from "../images/hand1.jpg";
import hand2 from "../images/hand2.jpg";
import hand3 from "../images/hand3.jpg";
import hand4 from "../images/hand4.jpg";
import foot1 from "../images/foot1.jpg";
import foot2 from "../images/foot2.jpg";
import obj1 from "../images/obj1.jpg";
import obj2 from "../images/obj2.jpg";
import obj3 from "../images/obj3.jpg";
import obj4 from "../images/obj4.jpg";
import obj5 from "../images/obj5.jpg";
import figure1 from "../images/figure1.jpg";
import figure2 from "../images/figure2.jpg";

const DigitalIllustrationsBig = () => {
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
          href="https://icons8.com/icon/99819/pencil-drawing"
        >
          <img
            alt={{}}
            src="https://img.icons8.com/material-rounded/48/000000/pencil-tip.png"
          />
        </a>
        Digital
      </h1>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={eye} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={tree} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={figure1} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={figure2} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={face1} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={face2} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={hand1} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={hand2} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={hand3} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={hand4} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={foot1} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={foot2} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={obj2} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={obj4} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={obj5} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={obj1} />
      </Card>

      <Card style={{ border: "none", marginBottom: "100px" }}>
        <Card.Img variant="top" alt={{}} src={obj3} />
      </Card>
    </Container>
  );
};

export default DigitalIllustrationsBig;
