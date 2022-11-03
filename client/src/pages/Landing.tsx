import React from "react";
import { Link } from "react-router-dom";
import world from "../assets/world.gif";
import { Button } from "../components";

function Landing() {
  return (
    <div className="flex justify-around items-center h-screen bg-light-yellow">
      <div>
        <h1 className="text-7xl w-400 font-semibold">
          Welcome to{" "}
          <span className="font-bold text-neutral-green">Worldwide</span>{" "}
          Countries!
        </h1>
        <Link to="/home">
          <Button text="Start" style="text-white mt-5 w-full " />
        </Link>
      </div>
      <div>
        <img src={world} alt="world-gif" />
      </div>
    </div>
  );
}

export default Landing;
