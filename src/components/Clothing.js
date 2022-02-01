import React from "react";
import { Container } from "react-bootstrap";
import Media from "react-media";
import ClothingBig from "./ClothingBig";
import ClothingSmall from "./ClothingSmall";

const Clothing = () => {
  return (
    <Container>
      {/*Media query works*/}
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? <ClothingSmall /> : <ClothingBig />;
        }}
      </Media>
    </Container>
  );
};

export default Clothing;
