import React from "react";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ style, text, handle }) => {
  return (
    <button
      onClick={handle}
      className={`h-10 bg-blue-400 text-xl rounded-lg ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
