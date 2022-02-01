import React from "react";
import { Container } from "react-bootstrap";
import Media from "react-media";
import DigitalIllustrationsBig from "../components/DigitalIllustrationsBig";
import DigitalIllustrationsSmall from "../components/DigitalIllustrationsSmall";

const DigitalIllustrations = () => {
  return (
    <Container>
      {/*Media query works*/}
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <DigitalIllustrationsSmall />
          ) : (
            <DigitalIllustrationsBig />
          );
        }}
      </Media>
    </Container>
  );
};

export default DigitalIllustrations;
