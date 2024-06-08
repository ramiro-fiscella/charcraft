import React from 'react';
import { Link } from 'react-router-dom';
import { Proficiency } from '../services';

const CardCopy = ({ character, onClick }) => {
  return (
    // CARD CONTAINER
    <Link
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
      to={`/character/${character.id}`}
    >
      <div
        className="cursor-pointer w-[220px] h-[308px] rounded-lg bg-gradient-to-tl from-neutral-950 to-emerald-950 bg-blend-screen backdrop-blur-md border border-yellow-400 border-opacity-50 hover:border-opacity-90 hover:outline-double hover:outline-4 hover:outline-amber-500 transition-all shadow-lg shadow-zinc-950"
        id="card"
        onClick={onClick}
      >
        <div className="m-2 h-[90%] pt-2 px-1 flex-row rounded rounded-b-2xl bg-gradient-to-b from-neutral-300 to-stone-200">
          {/* NOMBRE Y NIVEL */}
          <div
            className="relative w-[100%] h-6 p-[2px] flex justify-between items-center border-[1px] border-neutral-600 rounded-t-sm text-neutral-900 bg-gradient-to-b from-neutral-300 to-stone-200 shadow-md shadow-stone-800"
            aria-label="Name and level of the character"
          >
            <h1 className="text-sm tracking-widest">{character.char_name}</h1>
            <div
              id="bookmark"
              className="flex justify-center items-center rounded-3xl w-7 h-7 border border-yellow-500 border-opacity-70 shadow-sm shadow-gray-950 bg-gradient-to-b from-neutral-950 to-stone-900"
            >
              <h3 className="tracking-normal text-base text-white m-auto">
                {character.level}
              </h3>
            </div>
          </div>

          {/* IMAGE */}
          <div className="mx-1 h-36">
            <img
              className="w-full h-full object-cover object-top border-double border-x-4 border-neutral-600 shadow-md shadow-stone-800"
              src={character.avatar_url || 'public/assets/card-placeholder.jpg'}
              alt="Character's image"
            />
          </div>

          {/* RACE-CLASS */}
          <div
            className="w-[100%] h-6 p-[2px] px-1 tracking-wide flex justify-between items-end border-[1px] border-neutral-600 rounded-sm text-neutral-900 bg-gradient-to-b from-neutral-300 to-stone-200 shadow-md shadow-stone-500"
            aria-label="Race and class of the character"
          >
            <h4 className="text-xs font-bold">
              {character.race} - {character.char_class}
            </h4>
            <p className="text-xs">🔱</p>
          </div>

          {/* INFO */}
          <div className="mx-1 h-20">
            <div
              className="w-full h-full p-2 flex flex-col justify-between items-start outline outline-1 outline-neutral-500 rounded-b bg-gradient-to-b from-neutral-200 to-stone-100 text-[.7rem] text-pretty leading-none text-neutral-900 shadow-md shadow-stone-950"
              aria-label="Character's quote"
            >
              <p className="pb-2 border-b border-neutral-400">
                {character.quote
                  ? character.quote
                  : 'Click the card to edit your character.'}
              </p>
              <p className=" text-neutral-500">- {character.username}</p>
            </div>

            <div
              id="bookmark"
              className="absolute right-3 bottom-[.9rem] flex justify-center items-center rounded-sm w-10 h-6 border border-neutral-500 border-opacity-70 shadow-sm shadow-gray-950 bg-stone-300"
            >
              <h3 className="font-bold text-sm text-black">
                +{Proficiency(character.level)}
              </h3>
            </div>
          </div>
        </div>

        <footer className="mx-2 mt-[10px] flex justify-between items-end">
          <p className="text-[8px] font-light text-neutral-300 text-left">
            RKF TTCD ©
          </p>
          <p className="text-[8px] font-light text-neutral-300 text-left">
            Cleric · 2024
          </p>
        </footer>
      </div>
    </Link>
  );
};

export default CardCopy;
