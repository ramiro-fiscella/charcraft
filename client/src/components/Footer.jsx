import React from "react";

import { FaTree, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-zinc-950 to-black text-stone-200 py-8 px-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b border-stone-600 py-8">
        <div>
          <h6>Games</h6>
          <ul>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Data</li>
            <li>Shipping</li>
          </ul>
        </div>

        <div>
          <h6>Support</h6>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>Model Status</li>
          </ul>
        </div>
        <div>
          <h6>Contact</h6>
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
            <li>Claims</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 p-0">
          <h5 className="text-2xl font-medium">Subscribe to our newsletter!</h5>
          <p className="py-4 font-light">
            The lastest news, articles and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col">
            <input id="email" type="email" placeholder="Enter email" />
            <button>Suscribe</button>
          </form>
        </div>
      </div>

      <div className="md:flex flex-col max-w-[1240px] px-2 py-4 m-auto items-center justify-between sm:flex-row text-center">
        <p className="font-light text-white">
          {new Date().getFullYear()} RKF. This website is for study purposes
          only.
        </p>
        <div className="flex justify-end gap-6 sm:w-[200px] pt-6 md:p-0 text-2xl ">
          <a href="https://rfiscella.vercel.app/" target="_blank">
            <FaTree className="hover:text-yellow-500 text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/ramiro-fiscella/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-yellow-500  text-white" />
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
