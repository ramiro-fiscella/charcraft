import React from 'react';
import { Hero, FillerInfo, Banner } from '../components';
import { CharactersView } from '../views';

const Home = () => {
  return (
    <>
      <Hero />

      <div className="w-full absolute h-48 pointer-events-none bg-gradient-to-b from-zinc-950"></div>

      <Banner />
      <CharactersView />
      <FillerInfo />
    </>
  );
};

export default Home;
