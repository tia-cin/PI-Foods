import React from "react";
import { PaginationProps } from "../types";
import Button from "./Button";

const Pagination: React.FC<PaginationProps> = ({
  current,
  pages,
  total,
  handlePag,
}) => {
  const pagesTotal = [];
  const displayed = Math.ceil(total / pages);
  for (let i = 1; i < displayed; i++) {
    if (i <= pages) pagesTotal.push(i);
  }
  return (
    <div className="flex my-5">
      {pagesTotal.map((item, i) => (
        <Button
          text={`${item}`}
          handle={() => handlePag(item)}
          key={i}
          style={`${
            item === current && "bg-blue-700 text-white"
          } w-10 mx-1 hover:bg-blue-700 transition-all hover:drop-shadow-xl hover:text-gray-200`}
        />
      ))}
    </div>
  );
};

export default Pagination;
