import React from "react";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`}>
      <div className="card">
        <div
          className="cursor-pointer w-[220px] h-[330px] rounded-lg  bg-emerald-950 bg-opacity-60 bg-blend-screen backdrop-blur-md border border-yellow-400  border-opacity-50 hover:border-opacity-90 hover:outline-double hover:outline-4 hover:outline-amber-500 transition-all duration-200 shadow-lg shadow-zinc-950"
          id="card"
        >
          <div className="m-2 h-[90%] pt-2 px-1 flex-row rounded-md text-white">
            {/* NOMBRE Y NIVEL */}
            <div
              className="w-[100%] h-6 p-[2px] flex justify-center items-center relative"
              aria-label="Name and level of the character"
            >
              <h1 className=" text-base font-bold tracking-wider">
                {character.char_name}
              </h1>
              <div className="w-7 h-7 flex justify-center items-center  absolute top-[-1.95rem] right-[-1.72rem] bg-gradient-to-tl from-slate-900 to-slate-700 rotate-45 border border-amber-400 shadow-sm shadow-gray-950 rounded-sm">
                <h3 className="  text-base m-auto rotate-[-45deg]">
                  {character.level}
                </h3>
              </div>
            </div>

            {/* IMAGE */}
            <div className="mx-1 h-48 border rounded-md border-yellow-500 border-opacity-70">
              <img
                className="w-full h-full object-cover object-top rounded-md"
                src={character.avatar_url || "assets/card-placeholder.jpg"}
                alt=" Character's image"
              />
            </div>

            {/* RACE-CLASS */}
            <div
              className="w-[100%] h-6 p-[2px] mt-1 px-1 flex justify-between items-start leading-3 text-sm"
              aria-label="Race and class of the character"
            >
              <h4 className="tracking-wide">
                {character.race} - {character.char_class}
              </h4>
              <p className="">🔱</p>
            </div>

            {/* INFO */}
            <div>
              <div
                className="w-full p-1 mt-1 text-[.7rem] text-pretty overflow-wrap"
                aria-label="Character's quote"
              >
                <p className="pb-1 font-light">
                  {character.quote
                    ? character.quote
                    : "Click the card to edit your character."}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-2 mt-2 flex justify-between items-end text-emerald-600 font-normal tracking-wide">
            <p className="text-[8px] text-left">RKF TTCD ©</p>
            <p className="text-[8px] text-right">Charcraft · 2024</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
