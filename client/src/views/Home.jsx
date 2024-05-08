import React from "react";
import { Hero, FillerInfo } from "../components";
import { CharactersView } from "../views";

const Home = () => {
  return (
    <div className="w-full h-full m-auto">
      <Hero />

      <div className="w-full absolute h-48 pointer-events-none bg-gradient-to-b from-zinc-950"></div>
      <FillerInfo />

      <CharactersView />
    </div>
  );
};

export default Home;
