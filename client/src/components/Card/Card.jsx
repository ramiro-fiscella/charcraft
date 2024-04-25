import React from "react";

const Card = () => {
  return (
    // CARD CONTAINER
    <div
      className="w-[224px] h-[308px] border-2 border-neutral-950 rounded-lg bg-neutral-950"
      id="card"
    >
      <div className="m-2 h-[90%] pt-2 px-1 mb-2 flex-row rounded rounded-b-2xl bg-neutral-200">
        {/* NOMBRE Y NIVEL */}
        <div
          className="w-[100%] h-6 p-[2px] flex justify-between items-center border-[1px] border-neutral-600 rounded-sm text-neutral-900"
          aria-label="Name and level of the character"
        >
          <h1 className="text-sm">Nombre</h1>
          <h3 className="text-xs">Lv. 12</h3>
        </div>

        {/* IMAGE */}
        <div className="mx-1 h-36">
          <img
            className="w-full h-full object-cover object-top outline-double outline-neutral-600"
            src="assets/card-placeholder.jpg"
            alt=" Character's image"
          />
        </div>

        {/* RACE-CLASS */}
        <div
          className="w-[100%] h-6 p-[2px] flex justify-between items-end border-[1px] border-neutral-600 rounded-sm text-neutral-900"
          aria-label="Race and class of the character"
        >
          <h4 className="text-xs">Race - class</h4>
          <p className="text-xs">🏹</p>
        </div>

        {/* INFO */}
        <div className="mx-1 h-36">
          <div
            className="w-full h-[80px] min-h-[80px] p-2 outline outline-1 outline-neutral-400 rounded-b bg-neutral-200 overflow-hidden hover:overflow-visible hover:h-auto transition-all duration-300"
            aria-label="Character's quote"
          >
            <p className="text-xs leading-4 font-medium text-neutral-800 overflow-wrap break-word">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              mollitia nostrum voluptatum architecto veniam tempora quia non,
              ullam est atque quisquam omnis delectus amet, nihil aut et hic
              aliquam animi ipsum necessitatibus.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-2 mt-3 flex justify-between items-end ">
        <p className="text-[6px] text-neutral-300 text-left">RKF TTCD ©</p>
        <p className="text-[6px] text-neutral-300 text-left">
          Charcraft · 2024
        </p>
      </div>
    </div>
  );
};

export default Card;
