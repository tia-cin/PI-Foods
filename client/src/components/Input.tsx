import React from "react";
import { InputsProps } from "../types";

const Input: React.FC<InputsProps> = ({
  select,
  text,
  values,
  onChange,
  name,
}) => {
  return (
    <div>
      {select ? (
        <select onChange={onChange}>
          {/* {values.map((item: any, i: number) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))} */}
        </select>
      ) : (
        <input value={values} onChange={onChange} />
      )}
    </div>
  );
};

export default Input;
