import React from 'react';

const Hero = ({ openForm }) => {
  return (
    <div className="relative h-[90vh] overflow-hidden bg-fixed bg-otra bg-cover bg-left">
      <div className="absolute bottom-0 w-[100vw] h-44 bg-gradient-to-t from-zinc-950"></div>
      <div className="relative h-full max-w-[1200px] m-auto ">
        <div className="absolute  max-w-[1200px] inset-4 md:inset-8 flex flex-col items-start justify-center text-center text-white ">
          <h1
            id="title"
            className="text-4xl xl:text-6xl text-left mb-4 leading-14 "
          >
            Bienvenido a Cleric
          </h1>
          <p
            id="hero-text"
            className="md:w-[48rem] text-xl text-left leading-6 font-normal mb-6"
          >
            {/*
            <span className="text-yellow-500 font-medium">
            Deja de tener tus personajes en árboles muertos 🫠
            <br />
            </span>
            <br />
            */}
            Crea hojas de personaje de Dungeon & Dragons de manera{' '}
            <span className="text-yellow-500 font-medium">simple y rápida</span>
            . Centraliza toda tu información en un solo lugar.
          </p>

          <div className="flex gap-4 sm:flex-row flex-col w-full sm:w-auto">
            <button
              onClick={openForm}
              className="rounded-none outline-1 outline outline-black text-white  hover:border-emerald-300"
            >
              Crea tu personaje
            </button>

            <button className="rounded-none outline-1 outline outline-black bg-zinc-900/70 text-yellow-500 hover:bg-yellow-600/90 hover:text-white">
              Saber mas
            </button>
          </div>
        </div>
        <div className="absolute max-w-[1200px] right-4 bottom-4 text-sm text-right">
          <p className="font-light">
            Arte de{' '}
            <a
              className="hover:underline underline-offset-4"
              href="https://www.andreasrocha.com/"
            >
              Andreas Rocha
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
