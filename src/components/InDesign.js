import React from "react";
import { Container } from "react-bootstrap";
import Media from "react-media";
import InDesignBig from "../components/InDesignBig";
import InDesignSmall from "../components/InDesignSmall";
const InDesign = () => {
  return (
    <Container>
      {/*Media query works*/}
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? <InDesignSmall /> : <InDesignBig />;
        }}
      </Media>
    </Container>
  );
};

export default InDesign;
