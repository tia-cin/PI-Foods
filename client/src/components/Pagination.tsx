import React from "react";
import { PaginationProps } from "../types";
import Button from "./Button";

const Pagination: React.FC<PaginationProps> = ({ pages, total, handlePag }) => {
  const pagesTotal = [];
  const displayed = Math.ceil(total * pages);
  for (let i = 1; i < displayed; i++) {
    if (i <= 15) pagesTotal.push(i);
  }
  return (
    <div className="flex justify-between w-600 my-5">
      {pagesTotal.map((item, i) => (
        <Button
          text={`${item}`}
          handle={() => handlePag(item)}
          key={i}
          style="w-10 mx-2 hover:bg-blue-700 transition-all"
        />
      ))}
    </div>
  );
};

export default Pagination;
