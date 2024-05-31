import React, { useState } from 'react';
import { Hero, FillerInfo, Banner, CharacterForm } from '../components';
import { CharactersView } from '../views';

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <Hero openForm={openForm} />
      {isFormOpen && <CharacterForm closeForm={closeForm} />}

      <div className="w-full absolute h-48 pointer-events-none bg-gradient-to-b from-zinc-950"></div>

      <Banner />
      <CharactersView />
      <FillerInfo />
    </>
  );
};

export default Home;
