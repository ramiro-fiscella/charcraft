import React from "react";
import { Hero, FillerInfo } from "../components";
import { CharactersView } from "../views";

const Home = () => {
  return (
    <div className="w-full h-full m-auto">
      <Hero />
      <div className="w-full absolute h-80 pointer-events-none bg-gradient-to-b from-zinc-950"></div>
      <FillerInfo />
      <div className="w-ful mt-20 p-12 h-full">
        <h2 className="text-center">Your Characters</h2>
        <CharactersView />
      </div>
    </div>
  );
};

export default Home;
