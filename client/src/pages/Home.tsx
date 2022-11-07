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
import { Button, Card, Input, Pagination, Select, Titles } from "../components";
import { AiOutlineSearch, AiOutlineReload } from "react-icons/ai";

const Home = () => {
  const dispatch = useDispatch();
  const { countries, continents, activities } = useSelector(
    (state: RootState) => state
  );
  const [search, setSearch] = useState<string>("");
  const handleSearchChange = (e: any) => setSearch(e.target.value);
  const handleFilterContinents = (e: any) =>
    dispatch<any>(filterContinent(`continent-${e.target.value}`));
  const handleFilterActivities = (e: any) =>
    dispatch<any>(filterActivity(`activity-${e.target.value}`));
  const handleOrderPopulation = (e: any) =>
    dispatch<any>(orderCountriesPopulation(e.target.value));
  const handleOrderPerName = (e: any) =>
    dispatch<any>(orderCountriesName(e.target.value));

  const [page, setPage] = useState<number>(1);
  const itemsXPage = 15;
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
    <div className="p-5 mt-5 overflow-hidden">
      <div className="flex items-center justify-center translate-x-20 ">
        <Titles
          title="Explore the world's countries"
          subtitle={`There are ${countries.length} countries waiting for you`}
        />
        <Button
          text="Create Activity"
          style="px-2 translate-x-80"
          handle={() => window.open("/create", "_self")}
        />
      </div>
      <div className="flex flex-col justify-evenly my-5 mt-10">
        <div className="flex justify-between flex-row-reverse">
          <button
            className="bg-gray-200 rounded-full px-5 text-2xl hover:bg-gray-300"
            onClick={() => dispatch<any>(getCountries())}
            title="Reset countries"
          >
            <AiOutlineReload />
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch<any>(searchCountry(search));
              setSearch("");
            }}
          >
            <Input name="search" value={search} onChange={handleSearchChange} />
          </form>{" "}
        </div>
        <form className="flex justify-between">
          <Select
            onChange={handleFilterContinents}
            name="Filter by Continents"
            values={continents}
          />
          <Select
            onChange={handleFilterActivities}
            name="Filter by Activities"
            values={activities.map((a) => a.name)}
          />
          <Select
            onChange={handleOrderPopulation}
            values={["min", "max"]}
            name="Order per Population"
          />
          <Select
            name="Order per Name"
            values={["asc", "desc"]}
            onChange={handleOrderPerName}
          />
        </form>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-5 gap-x-20 mt-5 ml-16">
          {displayedItems.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
        <Pagination
          current={page}
          pages={itemsXPage}
          total={countries.length}
          handlePag={handlePag}
        />
      </div>
    </div>
  );
};

export default Home;
