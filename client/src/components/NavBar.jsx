import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CharacterForm } from "../components";
import { GiEmerald, GiSecretBook } from "react-icons/gi";

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full  fixed top-0 left-0 mx-auto p-2 bg-emerald-950 bg-opacity-80 bg-blend-screen backdrop-blur-md border-b border-emerald-950 z-40">
      <div className="max-w-[1200px] m-auto flex justify-between items-center">
        <div className="flex flex-row justify-between gap-4">
          <Link to="/" onClick={scrollToTop}>
            <h1 className="text-2xl leading-4 m-0">
              <GiSecretBook />
            </h1>
          </Link>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/characters" onClick={scrollToTop}>
                Characters
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>
                About
              </Link>
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
