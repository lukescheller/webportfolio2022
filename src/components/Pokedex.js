import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import TypeButton from "./TypeButton";

const style = {
  display: "grid",
  gridTemplateColumns: "1fr",
  columnGap: "10px",
  rowGap: "10px",
};

const styleH1 = {
  gridColumn: "1/-1",
  borderBottom: "1px solid black",
  color: "black",
  display: "inline-block",
  textAlign: "left",
  fontWeight: "lighter",
  padding: "10px",
  margin: "10px",
  marginBottom: "50px",
};

const Pokedex = (props) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokedexFilter, setPokedexFilter] = useState([]);
  const [pokeType, setPokeType] = useState("");

  const addPokemon = (p) => {
    setPokedex((prevPokemon) => {
      return [p, ...prevPokemon];
    });
  };

  const pokeFilter = (arr) => {
    setPokedexFilter(arr);
  };

  const pokeTypeHandler = (type) => {
    setPokeType(type);
  };

  useEffect(() => {
    setPokedex([]);
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=386").then((res) => {
      for (let x = 0; x < res.data.results.length; x++) {
        axios.get(res.data.results[x].url).then((res) => {
          addPokemon({
            id: res.data.id,
            name: res.data.name,
            types: res.data.types,
            img: res.data.sprites.front_default,
          });
        });
      }
    });
  }, []);

  pokedex.sort(function (a, b) {
    return a.id - b.id;
  });

  return (
    <Container style={style}>
      <h1 style={styleH1}>
        <a
          style={{ marginRight: "10px" }}
          href="https://icons8.com/icon/79952/pokeball"
        >
          <img
            alt={{}}
            src="https://img.icons8.com/ios-glyphs/60/000000/pokeball.png"
          />
        </a>
        Pokedex
      </h1>
      <div style={{}}>
        <TypeButton
          data={pokedex}
          pokeFilter={pokeFilter}
          pokeTypeHandler={pokeTypeHandler}
        />
      </div>
      <div>
        <h1>
          Type: {pokeType} ({pokedexFilter.length} - 386)
        </h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {pokedexFilter.map((p) => (
          <div
            style={{
              margin: "5px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            <img src={p.img} />
            <p>{p.name}</p>
            <p>#{p.id}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pokedex;
