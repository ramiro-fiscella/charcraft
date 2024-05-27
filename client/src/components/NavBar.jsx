import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CharacterForm } from '../components';
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowForm = () => setShowForm((prev) => !prev);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="w-full h-14 fixed top-0 left-0 mx-auto  py-0 bg-emerald-950 bg-opacity-80 bg-blend-screen backdrop-blur-md border-b border-emerald-950 z-40">
      <div className="max-w-[1200px] px-4 h-full m-auto flex justify-between items-center">
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-2xl flex flex-row items-center gap-4"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            <img
              className="w-12"
              src="data:image/png;base64,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"
            />
            <h1 className="lg:hidden text-lg text-neutral-200 border-b border-yellow-500">
              CharCraft
            </h1>
          </Link>
          <ul
            className={`hidden  lg:flex items-center gap-4 ${
              showMenu
                ? 'flex-col absolute top-14 right-0 bg-emerald-950 py-2 '
                : ''
            }`}
          >
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/characters" onClick={closeMenu}>
                Characters
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="lg:hidden border-none" onClick={toggleMenu}>
            <FaBars />
          </button>
          {showMenu && (
            <div className="lg:hidden  h-[140vh] py-2 px-4 absolute top-14 right-0 flex flex-col items-center text-right justify-between bg-gradient-to-b from-emerald-950/90 from-20% to-neutral-950 z-40">
              <ul className="flex flex-col h-60 gap-8 mt-16 justify-center ">
                <li>
                  <Link to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/characters" onClick={closeMenu}>
                    Characters
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <button
                  onClick={() => {
                    handleShowForm();
                    closeMenu();
                  }}
                >
                  Create Character
                </button>
                <button
                  className="bg-transparent border border-white text-white hover:bg-yellow-400 hover:text-black "
                  onClick={closeMenu}
                >
                  Register
                </button>
              </ul>
            </div>
          )}
          <button className="hidden lg:block" onClick={handleShowForm}>
            Create Character
          </button>
          {showForm && <CharacterForm closeForm={() => setShowForm(false)} />}
          <button className="hidden lg:block bg-transparent border border-white text-white hover:bg-yellow-400 hover:text-black ">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
