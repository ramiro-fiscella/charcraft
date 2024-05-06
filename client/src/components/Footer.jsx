import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-center md:text-left">
            © {new Date().getFullYear()} RKF Studio.
          </p>
          <ul className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="text-white hover:text-yellow-500">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-yellow-500">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-yellow-500">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
