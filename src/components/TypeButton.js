import React from "react";

const TypeButton = (props) => {
  let typeArray = [];
  for (let x = 0; x < props.data.length; x++) {
    for (let y = 0; y < props.data[x].types.length; y++) {
      if (!typeArray.includes(props.data[x].types[y].type.name)) {
        typeArray.push(props.data[x].types[y].type.name);
      }
    }
  }

  const filterType = (event) => {
    let filteredPokemon = [];
    console.log(event.target.value);
    props.pokeTypeHandler(event.target.value);
    for (let x = 0; x < props.data.length; x++) {
      for (let y = 0; y < props.data[x].types.length; y++) {
        // console.log(props.data[x].types[y]);
        if (event.target.value === props.data[x].types[y].type.name) {
          filteredPokemon.push(props.data[x]);
        }
      }
    }
    props.pokeFilter(filteredPokemon);
  };

  const allPokemon = (event) => {
    props.pokeTypeHandler(event.target.value);
    let allPokemon = [];
    for (let x = 0; x < props.data.length; x++) {
      allPokemon.push(props.data[x]);
    }
    props.pokeFilter(allPokemon);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        style={{ margin: "5px" }}
        onClick={allPokemon}
        value="all"
      >
        all
      </button>
      {typeArray.map((type) => (
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "5px" }}
          onClick={filterType}
          value={type}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default TypeButton;
