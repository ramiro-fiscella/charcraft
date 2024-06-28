import React from 'react';

const Hero = ({ openForm }) => {
  return (
    <div className="relative h-[90vh] overflow-hidden bg-fixed bg-otra bg-cover bg-left">
      <div className="absolute bottom-0 w-[100vw] h-44 bg-gradient-to-t from-zinc-950"></div>
      <div className="relative h-full max-w-[1400px] m-auto ">
        <div className="absolute pt-16 max-w-[1400px] inset-4 md:inset-8 flex flex-col gap-6 md:gap-1 items-center xl:items-start justify-center text-center text-white ">
          <h1
            id="title"
            className="text-4xl lg:text-5xl text-center lg:text-left mb-4 leading-[3rem]"
          >
            Bienvenido a Cleric
          </h1>
          <p
            id="hero-text"
            className="md:w-[44rem] text-xl xl:text-2xl text-center xl:text-left leading-6 font-[500] mb-6"
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
              onMouseDown={openForm}
              className="rounded-none outline-1 outline outline-black text-white  hover:border-emerald-300"
            >
              Crea tu personaje
            </button>

            <button className="rounded-none outline-1 outline outline-black bg-gradient-to-t from-zinc-950/70 bg-zinc-900/80 text-yellow-500 hover:from-yellow-500/70 hover:to-yellow-500/70 hover:text-white">
              Conocer mas
            </button>
          </div>
        </div>
        <div className="absolute max-w-[1400px] right-4 bottom-4 text-sm text-right">
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
