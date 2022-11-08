import React, { useState, useEffect } from "react";
import { createActivity, getCountries } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AlertType, ActivityType } from "../types";
import { Button, Input, Select, Titles } from "../components";
import { MdOutlineCancel } from "react-icons/md";

interface InputState {
  name: string;
  difficulty: number;
  duration: number;
  season: string;
  countries: Array<string>;
}

const Create: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.countries);
  const [input, setInput] = useState<InputState>({
    name: "",
    difficulty: 1,
    duration: 0,
    season: "",
    countries: [],
  });

  const handleChange = (e: any) => {
    if (e.target.value >= 1 || e.target.value !== "") {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleCountries = (e: any) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  };

  const handleDeleteCountries = (e: string) => {
    const newList = input.countries.filter((c: string) => c !== e);
    setInput({
      ...input,
      countries: [...newList],
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch<any>(createActivity(input));
    setInput({
      name: "",
      difficulty: 0,
      duration: 0,
      season: "",
      countries: [],
    });
    alert("New Activity Created!");
  };

  console.log(input);

  useEffect(() => {
    dispatch<any>(getCountries());
  }, [dispatch]);

  return (
    <div className="overflow-hidden p-5">
      <div className="flex items-center justify-center translate-x-20 ">
        <Titles
          title="Create Touristic Activities"
          subtitle="Complete the form to add a new activity"
        />
        <Button
          text="Go Back Home"
          style="px-2 translate-x-80"
          handle={() => window.open("/home", "_self")}
        />
      </div>
      <form onSubmit={handleSubmit} className="my-10 flex justify-around">
        <div>
          <div>
            <Input name="name" value={input.name} onChange={handleChange} />
          </div>
          <Input
            name="difficulty"
            type="range"
            props={{ max: 5, min: 1 }}
            value={input.difficulty}
            onChange={handleChange}
          />
          <Input
            name="duration"
            type="number"
            onChange={handleChange}
            value={input.duration}
          />
          <Select
            name="season"
            onChange={handleChange}
            values={["Summer", "Spring", "Winter", "Autumn"]}
          />
        </div>
        <div className="w-500">
          <Select
            name="countries"
            onChange={handleCountries}
            values={countries.map((c) => c.id)}
          />
          <div className="grid grid-cols-5 gap-1">
            {input.countries.map((item, i) => (
              <div className="flex w-20 h-10 my-2 justify-between items-center bg-blue-400 rounded-lg">
                <p className="ml-2" key={i}>
                  {typeof item === "string" && item}
                </p>
                <MdOutlineCancel
                  className="mr-2 cursor-pointer"
                  onClick={() => handleDeleteCountries(item)}
                />
              </div>
            ))}
          </div>
        </div>
        {input && (
          <div className=" bg-blue-400 rounded-xl p-2 my-2 w-300">
            <p className="capitalize text-2xl font-semibold">Preview</p>
            <div className="">
              <div className="flex justify-between">
                <p className="capitalize text-lg font-semibold">Name:</p>
                <span>{input.name ? input.name : "No name yet"}</span>
              </div>
              <div className="flex justify-between">
                <p className="capitalize text-lg font-semibold">Difficulty:</p>
                <span>{input.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <p className="capitalize text-lg font-semibold">Duration:</p>
                <span>{input.duration}hr</span>
              </div>
              <div className="flex justify-between">
                <p className="capitalize text-lg font-semibold">Season:</p>
                <span>{input.season ? input.season : "No season yet"}</span>
              </div>
              <div>
                <p className="capitalize text-lg font-semibold">Countries:</p>
                <span>
                  {input.countries.length >= 1
                    ? input.countries.join(", ")
                    : "No Countries yet"}
                </span>
              </div>
            </div>
          </div>
        )}
      </form>
      <div className="flex justify-center">
        <Button text="Create Activity" handle={handleSubmit} />
      </div>
    </div>
  );
};

export default Create;
