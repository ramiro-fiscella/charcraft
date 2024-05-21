import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative h-full  m-auto">
      <div className="relative h-min  mx-auto p-4 py-20 md:p-20 overflow-hidden bg-fixed bg-about bg-cover">
        <div className=" md:w-[30rem] max-w-[1200px] mx-auto  inset-4 md:inset-8 flex flex-col  justify-center  text-white">
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
            trabajo por hacer. Si quieres contribuir o colaborar puedes hacerlo
            en GitHub.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl">Contribuidores</h2>

        <p className="text-lg text-left leading-6 font-normal mb-6">
          Los GitHubs de las personas que contribuyan al proyecto se irán
          añadiendo aqui.
        </p>

        <ul>
          <li>
            <a
              href="https://github.com/ramiro-fiscella"
              target="_blank"
              rel="noreferrer"
            >
              Ramiro Fiscella
            </a>
          </li>
        </ul>

        <h2 className="text-2xl">Contacto</h2>

        <p className="font-light">
          Puedes contactar conmigo a traves de los siguientes canales.
        </p>

        <a href="https://ramirof.vercel.app" target="_blank">
          <FaTwitter /> Portfolio
        </a>
        <a href="https://www.linkedin.com/in/ramiro-fiscella/" target="_blank">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/ramiro-fiscella" target="_blank">
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
