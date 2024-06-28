import React from 'react';

const Banner = () => {
  return (
    <section className=" my-32 lg:my-12 pt-12 mx-auto max-w-[1400px] px-4 flex flex-col items-center justify-around lg:flex-row gap-4 *:relative  *:h-42 *:flex *:flex-col *:items-center *:gap-1">
      <div className="border border-yellow-500/40 bg-emerald-950/10 rounded-sm pb-6 p-4 text-center ">
        <img
          src="https://img.icons8.com/?size=100&id=2Ojl08SSyMuZ&format=png&color=eab308"
          className=" h-12"
        />
        <h1 className="text-lg mt-1">Crea</h1>
        <p className="font-light max-w-80">
          Crea tus hojas de personajes de manera simple y rápida.
        </p>
      </div>
      <div className="border  border-yellow-500/40 bg-emerald-950/10 rounded-sm pb-6 p-4 text-center ">
        <img
          src="https://img.icons8.com/?size=100&id=HUaW6dNwrRNO&format=png&color=eab308"
          className=" h-12"
        />
        <h1 className="text-lg mt-1">Explora</h1>
        <p className="font-light max-w-80">
          Explora los personajes creados por otros jugadores.
        </p>
      </div>
      <div className="border  border-yellow-500/40 bg-emerald-950/10 rounded-sm pb-6 p-4 text-center ">
        <img
          src="https://img.icons8.com/?size=100&id=wlvnDQnk6s17&format=png&color=eab308"
          className=" h-12"
        />
        <h1 className="text-lg mt-1">Equípate</h1>
        <p className="font-light max-w-80">
          Prepárate con las mejores herramientas para jugar sin problemas.
        </p>
      </div>
      <div className="border  border-yellow-500/40 bg-emerald-950/10 rounded-sm pb-6 p-4 text-center ">
        <img
          src="https://img.icons8.com/?size=100&id=NwLfPZ9NYjgF&format=png&color=eab308"
          className=" h-12"
        />
        <h1 className="text-lg mt-1">Juega</h1>
        <p className="font-light max-w-80">
          Lleva a tus personajes donde quieras y cuando quieras.
        </p>
      </div>
    </section>
  );
};

export default Banner;
