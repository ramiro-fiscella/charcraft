import React, { useState } from "react";
import { CharacterForm } from "../components";

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <nav className="w-full fixed top-0 left-0 mx-auto p-4 bg-neutral-900 z-40">
      <div className="max-w-[1200px] m-auto flex justify-between items-center">
        <div className="flex gap-8">
          <h1 className="text-xl leading-none m-0">🧙CC</h1>
          <ul className="flex gap-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Characters</a>
            </li>
            <li>
              <a href="">Create</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button onClick={handleShowForm}>Create Character</button>
          {showForm && <CharacterForm closeForm={() => setShowForm(false)} />}

          <button className="bg-transparent border border-white text-white hover:bg-yellow-500  hover:text-black">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
