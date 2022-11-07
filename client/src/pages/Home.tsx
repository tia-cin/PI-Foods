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
} from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Button, Card, Input, Pagination, Titles } from "../components";
import { AiOutlineSearch, AiOutlineReload } from "react-icons/ai";

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
    <div className="p-5 mt-5">
      <Titles
        title="Explore the world's countries"
        subtitle={`There are ${countries.length} countries waiting for you`}
      />

      <div className="flex justify-evenly my-5 mt-10">
        <button
          className="bg-gray-200 rounded-full px-3 hover:bg-gray-300"
          onClick={() => dispatch<any>(getCountries())}
        >
          <AiOutlineReload />
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch<any>(searchCountry(search));
            setSearch("");
          }}
          className="flex bg-gray-200 rounded-lg p-2"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="bg-transparent focus:text-gray-700 focus:border-blue-700 focus:outline-none"
          />
          <button type="submit">
            <AiOutlineSearch className="text-xl" />
          </button>
        </form>
        <form className="flex">
          <div className="bg-gray-200 rounded-lg p-2 mx-1">
            <select
              onChange={(e) =>
                dispatch<any>(filterContinent(`continent-${e.target.value}`))
              }
              className="bg-transparent"
            >
              <option selected>Filter by Continents</option>
              {continents.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="bg-gray-200 rounded-lg p-2 mx-1 hover:bg-gray-300">
            <select
              onChange={(e) =>
                dispatch<any>(filterActivity(`activity-${e.target.value}`))
              }
              className="bg-transparent"
            >
              <option selected>Filter by Activities</option>
              {activities.map((c, i) => (
                <option key={i} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="bg-gray-200 rounded-lg p-2 mx-1">
            <select
              onChange={(e) =>
                dispatch<any>(orderCountriesPopulation(e.target.value))
              }
              className="bg-transparent"
            >
              <option selected>Order per Population</option>
              {["min", "max"].map((c, i) => (
                <option key={i} value={c} className="capitalize">
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="bg-gray-200 rounded-lg p-2 mx-1">
            <select
              onChange={(e) =>
                dispatch<any>(orderCountriesName(e.target.value))
              }
              className="bg-transparent"
            >
              <option selected>Order per Name</option>
              {["asc", "desc"].map((c, i) => (
                <option key={i} value={c} className="capitalize">
                  {c}
                </option>
              ))}
            </select>
          </div>
        </form>
        <Button
          text="Create Activity"
          style="px-2"
          handle={() => window.open("/create", "_self")}
        />
      </div>
      <div className="flex flex-col items-center">
        <Pagination
          current={page}
          pages={itemsXPage}
          total={countries.length}
          handlePag={handlePag}
        />
        <div className="grid grid-cols-4 gap-x-20 mt-5 ml-16">
          {displayedItems.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
