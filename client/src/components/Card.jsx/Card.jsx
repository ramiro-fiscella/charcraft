import React from "react";

const Card = () => {
  return (
    // CARD CONTAINER
    <div
      className="w-[224px] h-[308px] border-2 rounded-lg bg-neutral-900"
      id="card"
    >
      <div className="m-2 h-[90%] pt-2 px-1 mb-2 flex-row rounded rounded-b-2xl bg-neutral-200">
        {/* NOMBRE Y NIVEL */}
        <div
          className="w-[100%] h-6 p-[2px] flex justify-between content-center border-[1px] border-neutral-900 rounded-sm text-neutral-900"
          aria-label="Name and level of the character"
        >
          <h1 className="text-sm">Nombre</h1>
          <h3 className="text-xs">Lv</h3>
        </div>

        {/* IMAGE */}
        <div className="mx-1 h-36">
          <img
            className="w-full h-full object-cover outline-double outline-neutral-900"
            src="https://static01.nyt.com/images/2014/11/03/arts/GARDEN/GARDEN-superJumbo.jpg"
            alt=" Character's image"
          />
        </div>

        {/* RACE-CLASS */}
        <div
          className="w-[100%] h-6 p-[2px] flex justify-between items-end border-[1px] border-neutral-900 rounded-sm text-neutral-900"
          aria-label="Race and class of the character"
        >
          <h4 className="text-xs">Race - class</h4>
          <p className="text-xs">🏹</p>
        </div>

        {/* INFO */}
        <div className="mx-1 h-36">
          <div
            className="w-full h-[80px] min-h-[80px] p-2 outline outline-1 outline-neutral-900 rounded-b bg-neutral-200 overflow-hidden hover:overflow-visible hover:h-auto"
            aria-label="Character's quote"
          >
            <p className="text-xs overflow-wrap break-word">
              Lorem i met consectetur adipisicing elit. Obcaecati ipsa corrupti
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              culpa non doloribus? Cumque beatae nobis assumenda numquam ad,
              aspernatur laboriosam?
            </p>
          </div>
        </div>
      </div>

      <div className="mx-2 mt-3 flex justify-between items-end ">
        <p className="text-[6px] text-neutral-300 text-left">RKF TTCD ©</p>
        <p className="text-[6px] text-neutral-300 text-left">
          Some rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Card;
