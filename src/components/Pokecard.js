import "./Pokecard.css";
import { useState } from "react";

import React from "react";

export default function Pokecard(props) {
  const [isHidden, setIsHidden] = useState(false);
  const toggleShow = () => {
    setIsHidden((prevState) => !prevState);
  };
  return (
    <div className="pokecard-container">
      <div className={`pokemon-details ${isHidden && "hide"}`}>
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
      <button onClick={toggleShow}> {isHidden ? "show" : "hide"} </button>
    </div>
  );
}
