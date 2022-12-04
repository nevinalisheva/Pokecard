import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default function Pokedex(props) {
  return (
    <div className="pokedex-container">
      {props.data.map((e, i) => (
        <Pokecard key={i} {...e} />
      ))}
    </div>
  );
}
