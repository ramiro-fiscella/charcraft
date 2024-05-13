import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CharacterForm } from '../components';
import { GiSecretBook } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="w-full h-14 fixed top-0 left-0 mx-auto px-3 py-0 bg-emerald-950 bg-opacity-80 bg-blend-screen backdrop-blur-md border-b border-emerald-950 z-40">
      <div className="max-w-[1200px] h-full m-auto flex justify-between items-center">
        <div className="flex flex-row justify-between gap-4">
          <Link to="/" onClick={scrollToTop}>
            <h1 className="text-2xl leading-4 m-0">
              <GiSecretBook />
            </h1>
          </Link>
          <ul
            className={`hidden lg:flex items-center gap-4 ${
              showMenu
                ? 'flex-col absolute top-14 right-2 bg-emerald-950 py-2 px-4 rounded-md'
                : ''
            }`}
          >
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
          <button className="lg:hidden" onClick={toggleMenu}>
            <FaBars />
          </button>
          {showMenu && (
            <div className="lg:hidden w-full h-[140vh] py-2 px-4 absolute top-14 right-0 flex flex-col items-center text-center justify-between bg-gradient-to-b from-emerald-950/90 from-20% to-neutral-950 z-40">
              <ul className="flex flex-col h-60 gap-8 mt-16 justify-center ">
                <li>
                  <Link className="text-lg" to="/" onClick={scrollToTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg"
                    to="/characters"
                    onClick={scrollToTop}
                  >
                    Characters
                  </Link>
                </li>
                <li>
                  <Link className="text-lg" to="/about" onClick={scrollToTop}>
                    About
                  </Link>
                </li>
                <button onClick={handleShowForm}>Create Character</button>
                {showForm && (
                  <CharacterForm closeForm={() => setShowForm(false)} />
                )}
                <button className="bg-transparent border border-white text-white hover:bg-yellow-400 hover:text-black ">
                  Register
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
