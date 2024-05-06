import React from "react";

const Card = ({ character, onClick }) => {
  return (
    // CARD CONTAINER
    <div
      className=" cursor-pointer w-[220px] h-[320px] rounded-lg bg-gradient-to-tl from-stone-700 to-stone-800 shadow-lg shadow-neutral-950"
      id="card"
      onClick={onClick}
    >
      <div className="m-2 h-[90%] pt-2 px-1 flex-row border rounded-md text-neutral-900 bg-gradient-to-b from-neutral-400 to-stone-400">
        {/* NOMBRE Y NIVEL */}
        <div
          className="w-[100%] h-6 p-[2px] flex justify-center items-center relative"
          aria-label="Name and level of the character"
        >
          <h1 className=" text-base font-bold">{character.char_name}</h1>
          <h3 className="bg-gradient-to-tl from-slate-900 to-slate-700 text-white text-xl w-10 h-10 flex justify-center items-center rounded-3xl absolute top-[-1.6rem] right-[-1.6rem] border border-amber-400 shadow-sm shadow-gray-800">
            {character.level}
          </h3>
        </div>

        {/* IMAGE */}
        <div className="mx-1 h-48 border rounded-md border-stone-300">
          <img
            className="w-full h-full object-cover object-top rounded-md"
            src={character.avatar_url || "assets/card-placeholder.jpg"}
            alt=" Character's image"
          />
        </div>

        {/* RACE-CLASS */}
        <div
          className="w-[100%] h-6 p-[2px] px-1 flex justify-between items-end "
          aria-label="Race and class of the character"
        >
          <h4 className="text-xs">
            {character.race} - {character.char_class}
          </h4>
          <p className="text-xs">🔱</p>
        </div>

        {/* INFO */}
        <div className="mx-1 h-36">
          <div
            className="w-full h-[80px] min-h-[80px] p-2 text-[9px] text-pretty leading-tight  overflow-wrap"
            aria-label="Character's quote"
          >
            <p className="pb-1">{character.quote}</p>

            <p className="pt-1">{character.created_at}</p>
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
