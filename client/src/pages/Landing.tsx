import React from "react";
import { Link } from "react-router-dom";
import world from "../assets/world.gif";
import { Button } from "../components";

function Landing() {
  return (
    <div className="flex justify-around items-center h-screen bg-light-yellow bg-white">
      <div>
        <h1 className="text-7xl w-400 font-semibold">
          Welcome to <span className="font-bold text-blue-400">Worldwide</span>{" "}
          Countries!
        </h1>
        <Button
          text="Start"
          style="text-white mt-5 w-full font-bold text"
          handle={() => window.open("/home", "_self")}
        />
      </div>
      <div>
        <img src={world} alt="world-gif" />
      </div>
    </div>
  );
}

export default Landing;
