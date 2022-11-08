import React from "react";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ style, text, handle }) => {
  return (
    <button
      onClick={handle}
      className={`h-10 px-2 bg-blue-400 text-white text-xl rounded-lg ${style} hover:bg-blue-700 hover:drop-shadow-xl hover:translate-y-1 transition-all`}
    >
      {text}
    </button>
  );
};

export default Button;
