import React, { useEffect, useState } from "react";
import {
  filterActivity,
  filterContinent,
  getActivities,
  getContinents,
  getCountries,
  orderCountriesName,
  orderCountriesPopulation,
  searchCountry,
} from "../redux/actions"; // getRecipes
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Button, Card, Input, Pagination, Titles } from "../components";
import { ThunkAction } from "redux-thunk";
import { ActionTypes } from "../types";

const Home = () => {
  const dispatch = useDispatch();
  const { countries, continents, activities } = useSelector(
    (state: RootState) => state
  );
  const [filter, setFilter] = useState<string>("");

  const [page, setPage] = useState<number>(1);
  const itemsXPage = 12;
  const lastPage = page * itemsXPage;
  const firstPage = lastPage - itemsXPage;
  const displayedItems = countries.slice(firstPage, lastPage);

  const handlePag = (pageNum: number) => {
    setPage(pageNum);
  };

  useEffect(() => {
    dispatch<any>(getCountries());
    dispatch<any>(getContinents());
    dispatch<any>(getActivities());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Titles
        title="Explore the world's countries"
        subtitle={`There are ${countries.length} countries waiting for you`}
      />
      <div className="">
        <Input text="Search" onChange={searchCountry} />
        <div className="flex">
          <Input
            text="Filter by Continents"
            values={continents}
            onChange={filterContinent}
          />
          <Input
            text="Filter by Activities"
            values={activities}
            onChange={filterActivity}
          />
          <Input
            text="Order per Population"
            values={["min", "max"]}
            onChange={orderCountriesPopulation}
          />
          <Input
            text="Order per Name"
            values={["asc", "desc"]}
            onChange={orderCountriesName}
          />
        </div>
      </div>
      <Pagination
        pages={itemsXPage}
        total={countries.length}
        handlePag={handlePag}
      />
      <div className="grid grid-cols-4 gap-2 mt-5">
        {displayedItems.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
