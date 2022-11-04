import React from "react";
import { InputsProps } from "../types";

const Input: React.FC<InputsProps> = ({ text, values, onChange }) => {
  return (
    <div className="flex flex-col w-40 mr-5">
      <label className="font-medium text-base">{text}</label>
      <select onChange={onChange}>
        {values.map((val: string, i: number) => (
          <option key={i} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Input;
