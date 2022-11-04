import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputsProps } from "../types";

const Input: React.FC<InputsProps> = ({ text, values, onChange }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState<string>("");
  return (
    <div className="flex flex-col w-40 mr-5">
      <label className="font-medium text-base">{text}</label>
      <select
        onSubmit={() => dispatch<any>(onChange(select))}
        onChange={(e) => setSelect(e.target.value)}
      >
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
