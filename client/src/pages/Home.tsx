import React, { useEffect, useState } from "react";
import {
  filterActivity,
  filterContinent,
  getCountries,
  orderCountriesName,
  orderCountriesPopulation,
} from "../redux/actions"; // getRecipes
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Button, Card, Input, Pagination } from "../components";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../types";

const Home = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state: RootState) => state);

  // paginado
  let [page, setPage] = useState(1); // comienzo de paginado
  let recipesXPage = 9;
  let lastPage = page * recipesXPage;
  let firstPage = lastPage - recipesXPage;
  let displayRecipes = countries.slice(firstPage, lastPage);

  let handlePag = (pageNum: number) => {
    setPage(pageNum);
  };

  return <div className="flex flex-col items-center"></div>;
};

export default Home;
