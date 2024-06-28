import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CharacterForm, Profile, LogoutBtn } from '../components';
import { useAuth0 } from '@auth0/auth0-react';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';
import { SiDiaspora } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
    <nav className=" h-16 fixed top-0 left-0 right-0 lg:top-4 lg:left-4 lg:right-4 py-2 px-4 mx-auto bg-emerald-950 lg:bg-opacity-80 lg:rounded-xl lg:border border-yellow-500/80 z-20">
      <div className="max-w-[1400px] h-full m-auto flex justify-between items-center">
        <div className="flex gap-4 items-center justify-center">
          <Link
            to="/"
            className="text-4xl flex flex-row items-center gap-4"
            onClick={() => {
              window.scrollTo({
                top: 0,
              });
            }}
          >
            <img
              className="w-10"
              src="https://img.icons8.com/?size=100&id=Cb8QNFPzIfTZ&format=png&color=FAB005"
            />
          </Link>
          <ul
            className={`hidden lg:flex items-center gap-4 *:uppercase ${
              showMenu
                ? 'flex-col absolute top-16 right-0 bg-emerald-950 py-2 '
                : ''
            }`}
          >
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                  });
                  closeMenu();
                }}
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                  });
                  closeMenu();
                }}
                to="/characters"
              >
                Personajes
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                  });
                  closeMenu();
                }}
                to="/about"
              >
                Acerca de
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <a
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="lg:hidden text-4xl z-50 text-yellow-500"
          >
            {showMenu ? <IoCloseSharp /> : <IoMenuSharp />}
          </a>

          {showMenu && (
            <div
              ref={menuRef}
              className="lg:hidden w-[420px] max-w-[82vw] h-[100vh] p-8 pt-12 absolute top-0 right-0 border-yellow-500 flex flex-col items-right text-right justify-between bg-gradient-to-b bg-emerald-950 z-40"
            >
              <ul className="flex flex-col h-auto gap-8 mt-16 justify-center text-right">
                <h1 className="text-4xl ">Cleric</h1>
                <li className="*:text-2xl">
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                      });
                      closeMenu();
                    }}
                    to="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="*:text-2xl">
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                      });
                      closeMenu();
                    }}
                    to="/characters"
                  >
                    Personajes
                  </Link>
                </li>
                <li className="*:text-2xl">
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                      });
                      closeMenu();
                    }}
                    to="/about"
                  >
                    Acerca de
                  </Link>
                </li>

                <div className="flex flex-col gap-4">
                  <button
                    className="pt-4 pb-3 rounded-lg text-md border-opacity-20"
                    onClick={() => {
                      handleShowForm();
                      closeMenu();
                    }}
                  >
                    Crear Personaje
                  </button>

                  {isAuthenticated && (
                    <div className="*:block *:w-full *:pt-4 *:rounded-lg ">
                      <LogoutBtn closeMenu={closeMenu} />
                    </div>
                  )}

                  {!isAuthenticated && (
                    <Link className="*:w-full" to="/login">
                      <button
                        className="from-zinc-900/60 to-zinc-900/60 text-md rounded-lg pt-4 pb-3 border-white/10 text-white hover:from-zinc-900/80 hover:to-zinc-900/80"
                        onClick={closeMenu}
                      >
                        Ingresar
                      </button>
                    </Link>
                  )}
                </div>

                <div className=" w-full absolute bottom-0 right-0 bg-zinc-900/60">
                  <ul className="flex flex-col items-end p-8 gap-4">
                    <h6>Redes</h6>
                    <li>
                      <a
                        href="https://github.com/ramiro-fiscella"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center pt-1 gap-2 text-lg text-zinc-400 hover:border-none hover:pb-0"
                      >
                        GitHub
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ramiro-fiscella/"
                        target="_blank"
                        className="flex items-center pt-1 gap-2 text-lg text-zinc-400 hover:border-none hover:pb-0"
                      >
                        LinkedIn
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ramirof.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center pt-1 gap-2 text-lg text-zinc-400 hover:border-none hover:pb-0"
                      >
                        Portfolio
                        <SiDiaspora className="text-orange-500 animate-spin-slow" />
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          )}
          <a
            className="hidden lg:block py-2 px-4 bg-gradient-to-t from-emerald-800 to-emerald-700 text-white tracking-wider border border-none rounded-md uppercase"
            onClick={handleShowForm}
          >
            Crear personaje
          </a>
          {showForm && <CharacterForm closeForm={() => setShowForm(false)} />}

          {!isAuthenticated ? (
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 0,
                });
              }}
              to="/login"
            >
              <a className="hidden lg:block py-2 px-4 bg-gradient-to-t from-zinc-900/70 to-zinc-800/70 text-white tracking-wider border border-none rounded-md uppercase">
                Ingresar
              </a>
            </Link>
          ) : (
            <div className="flex gap-4 items-center *:lg:block">
              <LogoutBtn closeMenu={closeMenu} />
              <Profile />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
