import React from 'react';
import { Hero, FillerInfo, Profile } from '../components';
import { CharactersView } from '../views';

const Home = () => {
  return (
    <>
      <Profile />
      <Hero />

      <div className="w-full absolute h-48 pointer-events-none bg-gradient-to-b from-zinc-950"></div>
      <FillerInfo />

      <CharactersView />
    </>
  );
};

export default Home;
