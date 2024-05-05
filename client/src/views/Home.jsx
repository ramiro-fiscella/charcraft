import React from "react";
import { Hero } from "../components";
import { CharactersView } from "../views";

const Home = () => {
  return (
    <div className="w-full h-full m-auto pt-10">
      <Hero />
      <h1>Charcraft</h1>
      <CharactersView />
    </div>
  );
};

export default Home;
