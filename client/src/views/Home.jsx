import React, { useState } from "react";
import { Hero, CharacterForm } from "../components";
import { CharactersView } from "../views";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="w-full h-full m-auto pt-10">
      <Hero />
      <h1>Charcraft</h1>
      <CharactersView />
      <button onClick={handleShowForm}>Create Character</button>
      {showForm && <CharacterForm closeForm={() => setShowForm(false)} />}
    </div>
  );
};

export default Home;
