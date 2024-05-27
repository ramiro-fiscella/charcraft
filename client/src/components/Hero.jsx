import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden bg-fixed bg-otra bg-cover bg-left">
      <div className="absolute bottom-0 w-[100vw] h-44 bg-gradient-to-t from-zinc-950"></div>
      <div className="relative h-full max-w-[1200px] m-auto">
        <div className="absolute md:w-96 max-w-[1200px]  inset-4 md:inset-8 flex flex-col items-start justify-center text-center text-white">
          <h1 className="text-4xl xl:text-6xl text-left font-semibold mb-4">
            Forge Your Own Legends
          </h1>
          <p className="md:w-72 text-lg text-left leading-6 font-normal mb-6">
            Crea hojas de personaje para el juego de rol Dungeon & Dragons de
            manera{' '}
            <span className="text-yellow-500 font-semibold">
              simple y rápida
            </span>{' '}
            .
          </p>
          <button className="">Crea tu personaje</button>
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
