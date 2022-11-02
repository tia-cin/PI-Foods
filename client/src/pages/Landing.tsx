import React from "react";
import { Link } from "react-router-dom";
import salad from "../assets/salad-gif.gif";
import { Button } from "../components";

function Landing() {
  return (
    <div className="flex justify-center items-center h-screen bg-light-yellow">
      <div>
        <h1 className="text-7xl w-400 font-semibold">
          Welcome to{" "}
          <span className="font-bold text-neutral-green">Spoonacular</span>{" "}
          Recipies!
        </h1>
        <Link to="/home">
          <Button text="Start" style="text-white mt-5 w-full " />
        </Link>
      </div>
      <div>
        <img src={salad} alt="salad-gif" />
      </div>
    </div>
  );
}

export default Landing;
