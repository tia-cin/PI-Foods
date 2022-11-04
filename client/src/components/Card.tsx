import React from "react";
import { CardProps } from "../types";

const Card: React.FC<CardProps> = ({ name, activities, flag, id }) => {
  return (
    <div
      onClick={() => window.open(`/country/${id}`, "_self")}
      className="cursor-pointer text-transparent hover:text-[#191919] hover:translate-x-4 hover:-translate-y-2 hover:scale-110 transition-all mx-5"
    >
      <img
        src={flag}
        alt={name}
        className="w-200 h-150 object-cover rounded-2xl"
      />
      <p className="text-center font-semibold text-lg w-200 h-14">{name}</p>
    </div>
  );
};

export default Card;
