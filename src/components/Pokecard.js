import "./Pokecard.css";

import React from "react";

export default function Pokecard(props) {
  return (
    <div className="pokecard-container">
      <div className={`pokemon-details ${props.isHidden && "hide"}`}>
        <h4> {props.name} </h4>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
          alt={props.name}
        />
        <ul>
          <li>Type: {props.type}</li>
          <li>Exp: {props.base_experience}</li>
        </ul>
      </div>
      <button onClick={props.buttonClick}>
        {" "}
        {props.isHidden ? "show" : "hide"}{" "}
      </button>
    </div>
  );
}
