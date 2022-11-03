import React, { useEffect, useState } from "react";
import {
  filterByDiets,
  getDiets,
  getRecipes,
  orderRecipes,
} from "../redux/actions"; // getRecipes
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Button, Card, Input, Pagination } from "../components";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../types";

function Home() {
  const dispatch = useDispatch();
  const { recipes, diets } = useSelector((state: RootState) => state);

  // paginado
  let [page, setPage] = useState(1); // comienzo de paginado
  let recipesXPage = 9;
  let lastPage = page * recipesXPage;
  let firstPage = lastPage - recipesXPage;
  let displayRecipes = recipes.slice(firstPage, lastPage);

  let handlePag = (pageNum: number) => {
    setPage(pageNum);
  };

  // filter by diets
  let handleDiets = (e: any) => {
    e.preventDefault();
    dispatch(filterByDiets(e.target.value));
  };

  // order
  let handleSort = (e: any) => {
    e.preventDefault();
    dispatch(orderRecipes(e.target.value));
  };

  // useEffect
  useEffect(() => {
    dispatch<any>(getRecipes());
    dispatch<any>(getDiets());
  }, [dispatch]);

  console.log(displayRecipes);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-semibold">Tasty Recipes</h1>
      <div className="flex">
        <Button text="Create Recipe" />
        <Input text="Search" values={""} onChange={() => {}} />
        <Input select text="Filter" values={diets} onChange={() => {}} />
        <Input
          select
          text="Order"
          values={["asc", "desc"]}
          onChange={() => {}}
        />
      </div>
      <Pagination
        pages={recipesXPage}
        total={recipes.length}
        handlePag={handlePag}
      />
      <div>
        {displayRecipes.length &&
          displayRecipes.map((item, i) => <Card key={i} {...item} />)}
      </div>
    </div>
  );
}

export default Home;
