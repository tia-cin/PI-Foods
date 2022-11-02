import React from "react";
import { CardProps } from "../types";

const Card: React.FC<CardProps> = ({ name, diets, img, id }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <p>{name}</p>
      <span>{diets.join(", ")}</span>
      <button onClick={() => window.open(`/`)}>+</button>
    </div>
  );
};

export default Card;
