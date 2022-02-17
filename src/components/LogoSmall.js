import React from "react";
import { Card, Container } from "react-bootstrap";
import elliott from "../images/elliott.jpg";
import TCM from "../images/twincitymovers.jpg";
import banner from "../images/Artboard2.jpg";
import ig from "../images/instagram_ad.png";
import tk from "../images/tk.jpg";

const LogoSmall = () => {
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
          href="https://icons8.com/icon/61362/trademark"
        >
          <img
            alt={{}}
            src="https://img.icons8.com/ios-glyphs/60/000000/trademark.png"
          />
        </a>
        Logos
      </h1>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={banner} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={elliott} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={TCM} />
      </Card>

      <Card style={{ border: "none" }}>
        <Card.Img variant="top" alt={{}} src={ig} />
      </Card>

      <Card style={{ border: "none", marginBottom: "100px" }}>
        <Card.Img variant="top" alt={{}} src={tk} />
      </Card>
    </Container>
  );
};

export default LogoSmall;
