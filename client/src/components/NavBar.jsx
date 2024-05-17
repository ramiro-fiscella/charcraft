import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreateCharacter } from '../components';
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
            <MdOutlineDesignServices />
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
          {showForm && <CreateCharacter closeForm={() => setShowForm(false)} />}
          <button className="hidden lg:block bg-transparent border border-white text-white hover:bg-yellow-400 hover:text-black ">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
