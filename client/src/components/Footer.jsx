import React from 'react';

import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { SiDiaspora } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-zinc-950 to-black text-stone-200 py-8 px-4  lg:px-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-y-12 md:grid-cols-5 border-b border-stone-600 py-8">
        <div>
          <h6>Mapa de Sitio</h6>
          <ul>
            <li>Inicio</li>
            <li>Personajes</li>
            <li>Crea tu personaje</li>
            <li>Registro</li>
            <li>Inicio de sesión</li>
          </ul>
        </div>
        <div>
          <h6>Contacto</h6>
          <ul>
            <li>Email</li>
            <li>Portfolio</li>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>+54 2281-349346</li>
          </ul>
        </div>
        <div>
          <h6>Legal</h6>
          <ul>
            <li>Reclamos</li>
            <li>Privacidad</li>
            <li>Terminos</li>
            <li>Políticas</li>
            <li>Condiciones</li>
          </ul>
        </div>
        <div className="col-span-2 p-0">
          <h5 className="text-2xl font-medium">
            Suscríbete para conocer novedades!
          </h5>
          <p className="py-4 font-light">
            Entérate de todas las actualizaciones importantes.
          </p>
          <form className="flex flex-col">
            <input id="email" type="email" placeholder="Enter email" />
            <button>Suscribe</button>
          </form>
        </div>
      </div>

      <div className="md:flex flex-col max-w-[1240px] px-2 py-4 m-auto mt-12 items-center justify-between sm:flex-row text-center">
        <p className="font-light text-white">
          {new Date().getFullYear()} RKF. This website is for study purposes
          only.
        </p>
        <div className="flex justify-center md:justify-end gap-6 sm:w-[200px] pt-6 md:p-0 text-2xl">
          <a
            href="https://www.linkedin.com/in/ramiro-fiscella/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-yellow-500  text-white" />
          </a>

          <a href="https://rfiscella.vercel.app/" target="_blank">
            <SiDiaspora className="text-orange-500 hover:text-emerald-600 animate-spin-slow hover:animate-spin" />
          </a>

          <a href="https://github.com/ramiro-fiscella" target="_blank">
            <FaGithubSquare className="hover:text-yellow-500  text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
