import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { SiDiaspora } from 'react-icons/si';

const About = () => {
  return (
    <>
      <div className="relative h-96 flex items-center justify-center w-full mx-auto p-4 py-20 overflow-hidden bg-fixed bg-about bg-cover">
        <p className="absolute bottom-4 right-4 font-light">
          Arte de{' '}
          <a
            className="hover:underline underline-offset-4"
            href="https://www.andreasrocha.com/"
          >
            Andreas Rocha
          </a>
        </p>
      </div>
      <div className="w-full border-t-4 border-double border-yellow-500">
        <div className="md:max-w-[1200px] mx-auto py-32 px-4 inset-4 flex flex-col-reverse md:flex-row justify-center gap-12 text-white ">
          <div className="md:w-96 h-96 md:h-auto object-cover rounded-xl bg-aboutCreator bg-cover"></div>

          <div className="md:w-96 ">
            <h1 className="text-5x font-semibold mb-4">Acerca de Cleric</h1>
            <p className="text-pretty w-full text-lg leading-6 font-normal mb-6">
              <span className="text-emerald-500">
                Cleric es un proyecto open source
              </span>{' '}
              que te permite crear hojas de personajes para el juego de rol de
              Dragon 5 edición de manera sencilla.
              <br />
              <br />
              El proyecto se encuentra en sus primeras etapas y aun queda mucho
              trabajo por hacer.
            </p>
            <p className="font-light">
              Arte de{' '}
              <a
                className="hover:underline underline-offset-4"
                href="https://efr83.artstation.com/"
              >
                Efren Alpízar Cordero
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="z-40 w-full h-min flex flex-col gap-8 py-20 px-4 justify-between items-center bg-gradient-to-b from-emerald-950/40 to-teal-900/40 border-double border-y-4 border-yellow-500 ">
        <MdOutlineDesignServices className="text-4xl text-yellow-500" />
        <h1 className="max-w-[1200px] m-auto md:px-24 inset-4 md:inset-8 font-bold text-3xl md:text-4xl text-center text-white">
          Si quieres contribuir o colaborar puedes hacerlo en GitHub
        </h1>

        <Link
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          to="https://github.com/ramiro-fiscella/Cleric"
          target="_blank"
        >
          <button className="w-full md:w-56 text-center">
            Ir al repositorio
          </button>
        </Link>
      </div>

      <div className="relative w-full h-96 mx-auto p-4 overflow-hidden bg-fixed bg-about2 bg-center bg-cover">
        <p className="absolute bottom-4 right-4 font-light">
          Arte de{' '}
          <a
            className="hover:underline underline-offset-4"
            href="https://www.andreasrocha.com/"
          >
            Andreas Rocha
          </a>
        </p>
      </div>
      <div className="w-full border-t-4 border-double border-yellow-500">
        <div className="md:max-w-[1200px] mx-auto pt-36 px-4 inset-4 flex flex-col-reverse md:flex-row justify-center gap-12 text-white ">
          <div className="w-full h-72 md:w-96 md:h-[555px] mx-auto md:mx-0 rounded-lg bg-emerald-900 border-4 border-double border-yellow-500 "></div>

          <div className="md:w-96">
            <h1 className="text-2xl xl:text-2xl  font-semibold mb-4">
              Un mensaje del creador
            </h1>
            <p className="text-pretty w-fulltext-lg leading-6 font-normal mb-6">
              Hola! Mi nombre es Ramiro y soy el creador de esta herramienta.
              Déjame contarte un poco sobre este proyecto.
              <br />
              <br />
              La idea de Cleric surgió inicialmente para reforzar mis
              conocimientos en backend, pero rápidamente me encariñé con la idea
              de crear y compartir una base de datos con mis compañeros roleros
              para diseñar y utilizar personajes en nuestras partidas de D&D.
              <br />
              <br />
              Así que me puse a investigar algunas plataformas que ofrecen esta
              funcionalidad. o he encontrado la simplicidad que busco a la hora
              de crear hojas de personajes.
            </p>

            <h3 className="text-xl mb-2">Mis Links:</h3>
            <ul className="flex flex-col gap-3 *:flex *:flex-row *:gap-2">
              <li>
                <a
                  href="https://github.com/ramiro-fiscella"
                  target="_blank"
                  rel="noreferrer"
                  className="flex pt-1 gap-2 text-lg hover:border-0"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ramiro-fiscella/"
                  target="_blank"
                  className="flex pt-1 gap-2 text-lg hover:border-0"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://ramirof.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex pt-1 gap-2 text-lg hover:border-0"
                >
                  <SiDiaspora className="text-orange-500 animate-spin-slow" />
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="my-32 mx-8 flex flex-col-reverse md:flex-row gap-5 justify-center">
        <h2>El futuro de Cleric</h2>
      </div> */}
    </>
  );
};

export default About;
