import React, { useState, useEffect } from "react";
import { createRecipe, getDiets } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AlertType, RecipeType } from "../types";
import { Button, Input } from "../components";

function Create() {
  const dispatch = useDispatch();
  const diets = useSelector((state: RootState) => state.diets);
  const [error, setError] = useState<AlertType>({ text: "", type: "" });
  const [input, setInput] = useState<RecipeType>({
    id: 0,
    name: "",
    summary: "",
    score: 0,
    health_score: 0,
    diets: [],
    instructions: "",
    img: "",
  });

  let validation = (item: any) => {
    if (!input.name) {
      setError({ text: "Name is requided!", type: "Error" });
    } else if (!input.summary) {
      setError({ text: "Summary is requided!", type: "Error" });
    } else if (!input.score) {
      setError({
        text: "Score must be a number between 0 and 100!",
        type: "Error",
      });
    } else if (!input.health_score) {
      setError({
        text: "Health score must be a number between 0 and 100!",
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
        diets: e.target.value,
      });
    }
  };
  let handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch<any>(createRecipe(input));
    setInput({
      id: 0,
      name: "",
      summary: "",
      score: 0,
      health_score: 0,
      diets: [],
      instructions: "",
      img: "",
    });
  };

  useEffect(() => {
    dispatch<any>(getDiets());
  }, [dispatch]);
  return (
    <div>
      <div>
        <Button />
        <h1>Create your Recipe</h1>
      </div>
      <form>
        <Input />
        <Button />
      </form>
    </div>
  );
}

export default Create;
