import React from "react";
import { Hero, FillerInfo } from "../components";
import { CharactersView } from "../views";

const Home = () => {
  return (
    <div className="w-full h-full m-auto">
      <Hero />

      <div className="w-full p-12">
        <FillerInfo />
        <h2 className="text-center">Your Characters</h2>
        <CharactersView />
      </div>
    </div>
  );
};

export default Home;
