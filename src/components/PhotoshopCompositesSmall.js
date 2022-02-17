import React from "react";
import { Card, Container } from "react-bootstrap";

import bettybadass from "../images/bettybadass.jpg";
import dessert from "../images/3rdcomposite.jpg";
import halloween from "../images/halloween.jpg";
import dinosaur from "../images/dinosaur.jpg";
import snake from "../images/snake.jpg";
import kermit from "../images/kermit.jpg";
import love from "../images/love.jpg";
import icecream from "../images/icecream.jpg";

const PhotoshopComposites = () => {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
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
          href="https://icons8.com/icon/60629/adobe-photoshop"
        >
          <img
            alt={{}}
            src="https://img.icons8.com/ios-glyphs/60/000000/adobe-photoshop.png"
          />
        </a>
        Composites
      </h1>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={love} />
      </Card>

      <Card style={{ border: "none", marginBottom: "100px" }}>
        <Card.Img variant="top" alt={{}} src={icecream} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={bettybadass} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={dessert} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={halloween} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={dinosaur} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={snake} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={kermit} />
      </Card>
    </Container>
  );
};

export default PhotoshopComposites;
