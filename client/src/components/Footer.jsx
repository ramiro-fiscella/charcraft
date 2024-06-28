import React from 'react';

import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { SiDiaspora } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-zinc-950 to-black text-stone-200 py-8 px-4  lg:px-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-y-12 md:grid-cols-5 border-b border-stone-600 py-8">
        <div>
          <p className="mb-4">Mapa de Sitio</p>
          <ul>
            <li>Inicio</li>
            <li>Personajes</li>
            <li>Crea tu personaje</li>
            <li>Registro</li>
            <li>Inicio de sesión</li>
          </ul>
        </div>
        <div>
          <p className="mb-4">Contacto</p>
          <ul>
            <li>Email</li>
            <li>Portfolio</li>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>+54 2281-349346</li>
          </ul>
        </div>
        <div>
          <p className="mb-4">Legal</p>
          <ul>
            <li>Reclamos</li>
            <li>Privacidad</li>
            <li>Terminos</li>
            <li>Políticas</li>
            <li>Condiciones</li>
          </ul>
        </div>
        <div className="col-span-2 p-0">
          <h4 className="text-2xl uppercase font-medium">
            Suscríbete para conocer novedades!
          </h4>
          <p className="py-4 font-light">
            Entérate de todas las actualizaciones importantes.
          </p>
          <form className="flex flex-col">
            <input id="email" type="email" placeholder="ejemplo@mail.com" />
            <button className="rounded-sm pt-4 pb-3">Suscríbete</button>
          </form>
        </div>
      </div>

      <div className="md:flex flex-col max-w-[1240px] px-2 py-4 m-auto mt-12 items-center justify-between sm:flex-row text-center">
        <p className="font-light text-white md:text-left">
          {new Date().getFullYear()} Este sitio es un proyecto de estudio.
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
