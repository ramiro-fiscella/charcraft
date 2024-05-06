import React from "react";

const Card = ({ character, onClick }) => {
  return (
    // CARD CONTAINER
    <div
      className=" cursor-pointer w-[220px] h-[308px] border border-yellow-500 border-opacity-30 hover:border-opacity-80 transition-all duration-200 rounded-lg bg-gradient-to-tl from-stone-950 to-slate-800 shadow-lg shadow-neutral-950"
      id="card"
      onClick={onClick}
    >
      <div className="m-2 h-[90%] pt-2 px-1 flex-row rounded rounded-b-2xl bg-gradient-to-b from-neutral-300 to-stone-200">
        {/* NOMBRE Y NIVEL */}
        <div
          className="w-[100%] h-6 p-[2px] flex justify-between items-center border-[1px] border-neutral-600 rounded-t-md text-neutral-900 bg-gradient-to-b from-neutral-300 to-stone-200 shadow-md shadow-stone-800"
          aria-label="Name and level of the character"
        >
          <h1 className="text-sm">{character.char_name}</h1>
          <h3 className="text-xs">Lv. {character.level}</h3>{" "}
        </div>

        {/* IMAGE */}
        <div className="mx-1 h-36">
          <img
            className="w-full h-full object-cover object-top outline-double outline-neutral-600 shadow-md shadow-stone-800"
            src={character.avatar_url || "assets/card-placeholder.jpg"}
            alt=" Character's image"
          />
        </div>

        {/* RACE-CLASS */}
        <div
          className="w-[100%] h-6 p-[2px] px-1 flex justify-between items-end border-[1px] border-neutral-600 rounded-b-md text-neutral-900 bg-gradient-to-b from-neutral-300 to-stone-200 shadow-md shadow-stone-500"
          aria-label="Race and class of the character"
        >
          <h4 className="text-xs">
            {character.race} - {character.char_class}
          </h4>
          <p className="text-xs">🏀</p>
        </div>

        {/* INFO */}
        <div className="mx-1 h-36">
          <div
            className="w-full h-[80px] min-h-[80px] p-2 outline outline-1 outline-neutral-500 rounded-b bg-gradient-to-b from-neutral-200 to-stone-100  text-[9px] text-pretty leading-tight text-neutral-900 overflow-wrap shadow-md shadow-stone-950 "
            aria-label="Character's quote"
          >
            <p className="pb-1">{character.quote}</p>

            <p className="pt-1 border-t-[1px] border-neutral-400">
              {character.created_at}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-2 mt-3 flex justify-between items-end">
        <p className="text-[6px] text-neutral-300 text-left">RKF TTCD ©</p>
        <p className="text-[6px] text-neutral-300 text-left">
          Charcraft · 2024
        </p>
      </div>
    </div>
  );
};

export default Card;
