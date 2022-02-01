import React from "react";
import { Container } from "react-bootstrap";
import Media from "react-media";
import LogoBig from "../components/LogoBig";
import LogoSmall from "../components/LogoSmall";
const Logos = () => {
  return (
    <Container>
      {/*Media query works*/}
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? <LogoSmall /> : <LogoBig />;
        }}
      </Media>
    </Container>
  );
};

export default Logos;
