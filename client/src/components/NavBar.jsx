import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CharacterForm, Profile } from '../components';
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';

import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowForm = () => setShowForm((prev) => !prev);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  const { isAuthenticated } = useAuth0();

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
              className="w-10"
              src="https://img.icons8.com/?size=100&id=Jtv187xsQJWd&format=png&color=FAB005"
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
            <div className="lg:hidden w-52 h-[140vh] py-2 px-4 absolute top-14 right-0 flex flex-col items-center text-right justify-between bg-gradient-to-b from-emerald-950/90 from-20% to-neutral-950 z-40">
              <ul className="flex flex-col h-60 gap-4 mt-16 justify-center ">
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

                {isAuthenticated && (
                  <button
                    className="bg-transparent border border-white text-white hover:bg-yellow-400 hover:text-black "
                    onClick={closeMenu}
                  >
                    Login
                  </button>
                )}

                <Profile />
              </ul>
            </div>
          )}
          <button className="hidden lg:block" onClick={handleShowForm}>
            Create Character
          </button>
          {showForm && <CharacterForm closeForm={() => setShowForm(false)} />}
          <Link
            className="hidden lg:block bg-transparent border border-white text-white hover:bg-yellow-400 hover:text-black "
            to="/login"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
