import React from "react";
import { Container } from "react-bootstrap";
import Media from "react-media";
import PhotoshopCompositesBig from "../components/PhotoshopCompositesBig";
import PhotoshopCompositesSmall from "../components/PhotoshopCompositesSmall";

const PhotoshopComposites = () => {
  return (
    <Container>
      {/*Media query works*/}
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <PhotoshopCompositesSmall />
          ) : (
            <PhotoshopCompositesBig />
          );
        }}
      </Media>
    </Container>
  );
};

export default PhotoshopComposites;
