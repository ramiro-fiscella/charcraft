import React from 'react';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  return (
    <section className="my-32 mx-8">
      <div
        className="flex justify-center gap-12 lg:gap-24 items-start "
        id="filler"
      >
        <div className="flex flex-col justify-evenly h-[420px] w-96 text-left z-30  rounded-xl">
          <h2 className="text-3xl mb-4">Qué es Charcraft?</h2>
          <p className="text-lg leading-6 font-light mb-6 text-pretty">
            Charcraft es un proyecto open source que (por el momento) permite
            crear hojas de personajes para el juego de rol Dungeons & Dragons 5ª
            edición de manera sencilla.
            <br />
            <br />
            El proyecto se encuentra en sus primeras etapas y aun queda mucho
            trabajo por hacer.
          </p>
          <Link to="/about">
            <button className="w-full shadow-md shadow-zinc-950">
              Ver mas
            </button>
          </Link>
        </div>

        <div>
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/305231400/original/90a39c5e8c3893ce5644be2bb7a52caa6e1a0bd1/create-your-dnd-or-fantasy-character.png"
            alt="Imagen"
            className="object-cover w-[350px] h-[420px]  rounded-lg shadow-md shadow-zinc-950"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
