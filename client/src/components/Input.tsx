import React from "react";
import { InputsProps } from "../types";

const Input: React.FC<InputsProps> = ({ text, values, onChange, name }) => {
  return (
    <div className="flex flex-col w-40 mr-5">
      {Array.isArray(values) ? (
        <div>
          <label className="font-medium text-base">{text}</label>
          <select onChange={onChange}>
            <option value={""} disabled>
              Continents
            </option>
            {values.map((item: any, i: number) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <input
          value={values}
          onChange={onChange}
          name={name}
          placeholder={text}
        />
      )}
    </div>
  );
};

export default Input;
