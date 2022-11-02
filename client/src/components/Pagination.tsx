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
    <div>
      {pagesTotal.map((item, i) => (
        <Button text={item} handle={() => handlePag(item)} key={i} />
      ))}
    </div>
  );
};

export default Pagination;
