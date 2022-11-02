import React from "react";
import { Link } from "react-router-dom";
import salad from "../assets/salad-gif.gif";

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
          <button className="mt-8 text-2xl bg-neutral-green text-white rounded-lg w-full h-12 transition-all hover:bg-dark-green">
            Start
          </button>
        </Link>
      </div>
      <div>
        <img src={salad} alt="salad-gif" />
      </div>
    </div>
  );
}

export default Landing;
