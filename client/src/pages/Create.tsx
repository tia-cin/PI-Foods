import React, { useState, useEffect } from "react";
import { createActivity, getCountries } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AlertType, ActivityType } from "../types";
import { Button, Input, Titles } from "../components";

const Create: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.countries);
  const [error, setError] = useState<AlertType>({ text: "", type: "" });
  const [input, setInput] = useState<ActivityType>({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
  });

  let validation = (item: any) => {
    if (!input.name) {
      setError({ text: "Name is requided!", type: "Error" });
    } else if (!input.difficulty) {
      setError({
        text: "Difficultymust be a number between 0 and 100!",
        type: "Error",
      });
    } else if (!input.duration) {
      setError({
        text: "Duration must be a number between 0 and 100!",
        type: "Error",
      });
    } else if (!input.season) {
      setError({
        text: "Season is required!",
        type: "Error",
      });
    }
    return error;
  };

  let handleChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  let handleCheckBox = (e: any) => {
    if (e.target.checked) {
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
    }
  };

  let handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch<any>(createActivity(input));
    setInput({
      name: "",
      difficulty: 0,
      duration: 0,
      season: "",
      countries: [],
    });
  };

  console.log(input);

  useEffect(() => {
    dispatch<any>(getCountries());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center p-5">
      <Titles
        title="Create Touristic Activities"
        subtitle="Complete the form to add a new activity"
      />
      <form onSubmit={handleSubmit} className="flex justify-around my-10">
        <div className="flex flex-col justify-between mr-10">
          <div>
            <label className="mx-2 font-medium text-lg">Name</label>
            <input
              className="bg-gray-200 p-2 rounded-lg w-full"
              onChange={handleChange}
              value={input.name}
              name="name"
            />
          </div>
          <div>
            <label className="mx-2 font-medium text-lg">Difficulty</label>
            <input
              className="bg-gray-200 p-2 rounded-lg w-full"
              type="range"
              min={1}
              max={5}
              onChange={handleChange}
              value={input.difficulty}
              name="difficulty"
            />
          </div>
          <div>
            <label className="mx-2 font-medium text-lg">Duration</label>
            <input
              className="bg-gray-200 p-2 rounded-lg w-full"
              placeholder="Duration"
              onChange={handleChange}
              type="number"
              value={input.duration}
              name="duration"
            />
          </div>
          <div>
            <label className="mx-2 font-medium text-lg">Season</label>
            <select
              className="w-full bg-gray-200 p-2 rounded-lg"
              name="season"
              onChange={handleChange}
            >
              <option selected>Choose a Season</option>
              {["Summer", "Spring", "Winter", "Autumn"].map((item, i) => (
                <option key={i}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-400 overflow-auto ml-10">
          {countries.map((item, i) => (
            <div>
              <label>{item.name}</label>
              <input
                key={i}
                type="checkbox"
                value={item.id}
                onChange={handleCheckBox}
              />
            </div>
          ))}
        </div>
      </form>
      <Button text="Create Activity" handle={handleSubmit} style="px-2" />
    </div>
  );
};

export default Create;
