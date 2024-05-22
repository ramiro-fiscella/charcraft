import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

const About = () => {
  return (
    <div className="relative h-full m-auto">
      <div className="relative  mx-auto p-4 py-20 pt-40 overflow-hidden bg-fixed bg-about bg-cover">
        <div className=" md:w-[30rem] max-w-[1200px] mx-auto inset-4 flex flex-col  justify-center text-white">
          <h1 className="text-4xl xl:text-6xl  font-semibold mb-4">
            Acerca de CharCraft
          </h1>
          <p className="text-lg  leading-6 font-normal mb-6">
            CharCraft es un proyecto open source que (por el momento) permite
            crear hojas de personajes para el juego de rol de Dragon 5 edición
            de manera sencilla.
            <br />
            <br />
            El proyecto se encuentra en sus primeras etapas y aun queda mucho
            trabajo por hacer.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 py-12  justify-between items-center pointer-events-none bg-gradient-to-b from-yellow-600 to-amber-600 border-double border-y-4 border-yellow-500 ">
        <MdOutlineDesignServices className="text-4xl text-yellow-300" />
        <h1 className="max-w-[1200px] m-auto px-4 md:px-24 inset-4 md:inset-8 font-bold text-3xl md:text-4xl text-center text-white">
          Si quieres contribuir o colaborar puedes hacerlo en GitHub
        </h1>

        <a
          className="w-full md:w-56 px-4"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ramirofiscella/charcraft"
        >
          <button className="w-full">Ir al repositorio</button>
        </a>
      </div>

      <div className="my-32 mx-8 flex flex-col-reverse md:flex-row gap-5 justify-center">
        <div className="flex flex-col justify-evenly text-left z-30  rounded-xl">
          <h2 className="text-3xl">Un mensaje del creador</h2>

          <p className="text-lg text-left leading-6 font-normal mb-6">
            <br />
            Hola! Soy Ramiro Fiscella, el creador de CharCraft. Déjame contarte
            un poco sobre este proyecto.
            <br />
            <br />
            La idea de CharCraft nació principalmente para reforzar mis
            conocimientos en backend, pero rápidamente me encariñé con la idea
            de poder usar y compartir a mis compañeros roleros una base de datos
            para crear y usar personajes para nuestras partidas de D&D.
            <br />
            <br />
            Si bien ya existen algunas plataformas que lo hacen, no encuentro la
            simpleza que busco a la hora de crear hojas de personajes.
          </p>

          <h3 className="text-xl mb-2">Mis Links:</h3>
          <ul className="flex flex-col gap-3 *:flex *:flex-row *:gap-2">
            <li>
              <a
                href="https://github.com/ramiro-fiscella"
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 text-lg"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ramiro-fiscella/"
                target="_blank"
                className="flex gap-2 text-lg"
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
                className="flex gap-2 text-lg"
              >
                <FaTwitter />
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/305231400/original/90a39c5e8c3893ce5644be2bb7a52caa6e1a0bd1/create-your-dnd-or-fantasy-character.png"
            alt="Imagen"
            className="object-cover w-[350px] h-[420px]  rounded-lg shadow-md shadow-zinc-950"
          />
        </div>
      </div>
      <div className="my-32 mx-8 flex flex-col-reverse md:flex-row gap-5 justify-center">
        <h2>El futuro de CharCraft</h2>
      </div>
    </div>
  );
};

export default About;
