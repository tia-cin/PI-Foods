import React, { useState, useEffect } from "react";
import { createActivity, getCountries } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AlertType, ActivityType } from "../types";
import { Button, Input, Select, Titles } from "../components";

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

  const validation = (item: any) => {
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

  const handleChange = (e: any) => {
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

  const handleCountries = (e: any) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
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
  };

  console.log(input);

  useEffect(() => {
    dispatch<any>(getCountries());
  }, [dispatch]);

  return (
    <div className="overflow-hidden flex flex-col items-center p-5">
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
      <form onSubmit={handleSubmit} className="my-10 flex">
        <div className="mx-10">
          <Input name="name" value={input.name} onChange={handleChange} />
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
        <div className="mx-10">
          <Select
            name="countries"
            onChange={handleCountries}
            values={countries.map((c) => c.id)}
          />
          <div>
            {input.countries.map((item, i) => (
              <p key={i}>{typeof item === "string" && item}</p>
            ))}
          </div>
        </div>
      </form>
      <Button text="Create Activity" handle={handleSubmit} style="px-2" />
    </div>
  );
};

export default Create;
