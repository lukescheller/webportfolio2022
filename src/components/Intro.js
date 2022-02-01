import React from "react";
import { Container } from "react-bootstrap";
import Media from "react-media";
import IntroBig from "../components/IntroBig";
import IntroSmall from "../components/IntroSmall";

const Intro = () => {
  return (
    <Container>
      {/*Media query works*/}
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? <IntroSmall /> : <IntroBig />;
        }}
      </Media>
    </Container>
  );
};

export default Intro;
