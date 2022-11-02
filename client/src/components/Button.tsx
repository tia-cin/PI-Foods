import React from "react";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ style, text, handle }) => {
  return (
    <button
      onClick={handle}
      className={`h-10 bg-neutral-green text-xl font-medium rounded-lg ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
