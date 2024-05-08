import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-zinc-950 to-black text-zinc-300 py-8 px-16">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-stone-600 py-8">
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
          <h6>Company</h6>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
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
          <h5 className="text-2xl font-semibold">
            Subscribe to our newsletter!
          </h5>
          <p className="py-4">
            The lastest news, articles and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col">
            <input id="email" type="email" placeholder="Enter email" />
            <button>Suscribe</button>
          </form>
        </div>
      </div>

      <div className="md:flex flex-col max-w-[1240px] px-2 py-4 m-auto items-center justify-between sm:flex-row text-center">
        <p>
          {new Date().getFullYear()} RKF. This website is for study purposes
          only.
        </p>
        <div className="flex justify-between sm:w-[200px] pt-6 px-12 md:p-0 text-2xl ">
          <FaFacebook className="hover:text-yellow-500 cursor-pointer" />
          <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
          <FaTwitch className="hover:text-yellow-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
