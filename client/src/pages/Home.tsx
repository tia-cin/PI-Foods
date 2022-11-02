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

  let handlePaginado = (pageNum: number) => {
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

  return (
    <div>
      <h1>Tasye Recipes</h1>
      <div>
        <Button />
        <Input />
        <Input />
        <Input />
      </div>
      <Pagination />
      <div>
        {displayRecipes.length &&
          displayRecipes.map((item, i) => <Card key={i} />)}
      </div>
    </div>
  );
}

export default Home;
