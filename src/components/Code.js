import React from "react";
import Media from "react-media";
import CodeBig from "./CodeBig";
import CodeSmall from "./CodeSmall";
import Pokedex from "./Pokedex";

const Code = (props) => {
  return (
    <div>
      {/* Media query works*/}
      <Media query="(max-width:767px)">
        {(matches) => {
          return matches ? (
            <CodeBig data={props.data} />
          ) : (
            <CodeSmall data={props.data} />
          );
        }}
      </Media>
      <Pokedex />
    </div>
  );
};

export default Code;
