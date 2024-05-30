import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CharacterForm, Profile, LogoutBtn } from '../components';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const { isAuthenticated } = useAuth0();

  const handleShowForm = () => setShowForm((prev) => !prev);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-20 fixed top-0 left-0 mx-auto py-0 bg-emerald-950 border-b border-yellow-500 z-20">
      <div className="max-w-[1200px] px-4 h-full m-auto flex justify-between items-center">
        <div className="flex gap-4 items-center justify-center">
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
              src="https://img.icons8.com/?size=100&id=Jtv187xsQJWd&format=png&color=FAB005"
            />
            <h1 className="hidden md:block text-lg text-neutral-200 border-b border-yellow-500">
              CharCraft
            </h1>
          </Link>
          <ul
            className={`hidden lg:flex items-center gap-4 ${
              showMenu
                ? 'flex-col absolute top-16 right-0 bg-emerald-950 py-2 '
                : ''
            }`}
          >
            <li>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/characters" onClick={closeMenu}>
                Personajes
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                Acerca de
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="lg:hidden"
          >
            {showMenu ? 'Cerrar' : 'Menu'}
          </button>

          {showMenu && (
            <div
              ref={menuRef}
              className="lg:hidden w-64 h-auto rounded-b-2xl pb-16 px-4 absolute top-[4.9rem] right-4 border border-t-0 border-yellow-500 flex flex-col items-center text-right justify-between bg-gradient-to-b from-emerald-950 from-20% to-neutral-950 z-40"
            >
              <ul className="flex flex-col h-auto gap-4 mt-16 justify-center text-center">
                <li className="*:text-lg">
                  <Link to="/" onClick={closeMenu}>
                    Inicio
                  </Link>
                </li>
                <li className="*:text-lg">
                  <Link to="/characters" onClick={closeMenu}>
                    Personajes
                  </Link>
                </li>
                <li className="*:text-lg">
                  <Link to="/about" onClick={closeMenu}>
                    Acerca de
                  </Link>
                </li>
                <button
                  onClick={() => {
                    handleShowForm();
                    closeMenu();
                  }}
                >
                  Crear Personaje
                </button>

                {isAuthenticated && <LogoutBtn closeMenu={closeMenu} />}

                {!isAuthenticated && (
                  <button
                    className="bg-transparent border border-white text-white hover:bg-yellow-400 hover:text-black text-xl"
                    onClick={closeMenu}
                  >
                    Ingresar
                  </button>
                )}
              </ul>
            </div>
          )}
          <button className="hidden lg:block" onClick={handleShowForm}>
            Crear personaje
          </button>
          {showForm && <CharacterForm closeForm={() => setShowForm(false)} />}

          {!isAuthenticated ? (
            <Link to="/login">
              <button className="hidden lg:block bg-transparent border border-white text-white hover:bg-yellow-400 hover:text-black text-lg">
                Ingresar
              </button>
            </Link>
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
