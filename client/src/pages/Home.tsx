import React, { ChangeEventHandler, useEffect, useState } from "react";
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
  const [search, setSearch] = useState<string>("");

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
    <div className="p-5">
      <Titles
        title="Explore the world's countries"
        subtitle={`There are ${countries.length} countries waiting for you`}
      />
      <div className="flex justify-around">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch<any>(searchCountry(search));
            setSearch("");
          }}
          className="flex"
        >
          <input value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">Search</button>
        </form>
        <form className="flex">
          <div>
            <select
              onChange={(e) =>
                dispatch<any>(filterContinent(`continent-${e.target.value}`))
              }
            >
              <option selected>Filter by Continents</option>
              {continents.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={(e) =>
                dispatch<any>(filterActivity(`activity-${e.target.value}`))
              }
            >
              <option selected>Filter by Activities</option>
              {activities.map((c, i) => (
                <option key={i} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={(e) =>
                dispatch<any>(orderCountriesPopulation(e.target.value))
              }
            >
              <option selected>Order per Population</option>
              {["min", "max"].map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={(e) =>
                dispatch<any>(orderCountriesName(e.target.value))
              }
            >
              <option selected>Order per Name</option>
              {["asc", "desc"].map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Pagination
          current={page}
          pages={itemsXPage}
          total={countries.length}
          handlePag={handlePag}
        />
        <div className="grid grid-cols-4 gap-2 mt-5 ml-16">
          {displayedItems.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
