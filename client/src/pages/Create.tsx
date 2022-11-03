import React, { useState, useEffect } from "react";
import { createActivity, getCountries } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AlertType, ActivityType } from "../types";
import { Button, Input } from "../components";

const Create = () => {
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
        countries: e.target.value,
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

  useEffect(() => {
    dispatch<any>(getCountries());
  }, [dispatch]);
  return (
    <div>
      {/* <div>
        <Button />
        <h1>Create your Recipe</h1>
      </div>
      <form>
        <Input />
        <Button />
      </form> */}
    </div>
  );
};

export default Create;
