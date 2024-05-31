import React from 'react';

const Banner = () => {
  return (
    <section className=" my-32 pt-12 mx-auto max-w-[1200px] px-4 flex flex-col items-center justify-around md:flex-row gap-8 *:relative  *:h-72 *:flex *:flex-col *:items-center ">
      <div className="border border-yellow-500/40 bg-emerald-950/10 rounded-xl pb-12 p-4 text-center gap-4">
        <img
          src="https://img.icons8.com/?size=100&id=2Ojl08SSyMuZ&format=png&color=eab308"
          className=" h-16"
        />
        <h2 className="text-3xl">Crea</h2>
        <p className="font-light max-w-80">
          Crea tus hojas de personajes de manera simple y rápida.
        </p>
      </div>
      <div className="border  border-yellow-500/40 bg-emerald-950/10 rounded-xl pb-12 p-4 text-center gap-4">
        <img
          src="https://img.icons8.com/?size=100&id=HUaW6dNwrRNO&format=png&color=eab308"
          className=" h-16"
        />{' '}
        <h2 className="text-3xl">Explora</h2>
        <p className="font-light max-w-80">
          Explora los personajes creados por otros jugadores.
        </p>
      </div>
      <div className="border  border-yellow-500/40 bg-emerald-950/10 rounded-xl pb-12 p-4 text-center gap-4">
        <img
          src="https://img.icons8.com/?size=100&id=wlvnDQnk6s17&format=png&color=eab308"
          className=" h-16"
        />{' '}
        <h2 className="text-3xl">Juega</h2>
        <p className="font-light max-w-80">
          Lleva a tus personajes donde quieras y cuando quieras.
        </p>
      </div>
    </section>
  );
};

export default Banner;
