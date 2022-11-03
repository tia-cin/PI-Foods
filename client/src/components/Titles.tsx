import React from "react";
import { TitlesProps } from "../types";

const Titles: React.FC<TitlesProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg font-medium">{subtitle}</p>
    </div>
  );
};

export default Titles;
