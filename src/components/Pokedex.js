import React from "react";
import Pokecard from "./Pokecard";
import { useState } from "react";
import "./Pokedex.css";

export default function Pokedex(props) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelectedIndex = (index) => {
    setSelectedIndex((prevState) => (prevState === index ? null : index));
  };

  return (
    <div className="pokedex-container">
      {props.data.map((e, i) => (
        <Pokecard
          isHidden={selectedIndex === i}
          buttonClick={() => handleSelectedIndex(i)}
          key={i}
          {...e}
        />
      ))}
    </div>
  );
}
