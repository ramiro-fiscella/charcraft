import React, { useState } from "react";
import { CharacterForm } from "../components";
import { GiEmerald, GiSecretBook } from "react-icons/gi";

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <nav className="w-full fixed top-0 left-0 mx-auto p-3 bg-emerald-950 bg-opacity-80 bg-blend-screen backdrop-blur-md border-b z-40">
      <div className="max-w-[1200px] m-auto flex justify-between items-center">
        <div className="flex gap-4">
          <h1 className="text-2xl leading-4 m-0">
            <a href="/">
              {/* 🔱 */}
              {/* <GiEmerald /> */}
              <GiSecretBook />
            </a>
          </h1>
          <ul className="flex gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/characters">Characters</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button onClick={handleShowForm}>Create Character</button>
          {showForm && <CharacterForm closeForm={() => setShowForm(false)} />}

          <button className="bg-transparent border border-white text-white hover:bg-yellow-400 hover:text-black ">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
