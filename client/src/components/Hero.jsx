import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[75vh] overflow-hidden">
      <img
        src="https://cdna.artstation.com/p/assets/images/images/010/629/620/large/ryan-richmond-planets.jpg?1525397919"
        alt="Hero Background"
        className="absolute inset-0 object-cover bg-top w-full h-full left-0"
      />

      <div className="absolute w-[30rem] ml-6 inset-0 flex flex-col items-start justify-center text-center text-white">
        <h1 className=" text-6xl text-left font-semibold mb-4 ">
          Forge Your Own Legends!
        </h1>
        <p className="text-xl text-left leading-6 font-medium mb-6">
          There can't be a good adventure if there are no good characters.
          Unleash your creativity with our customizable character sheets!
        </p>
        <button className=" font-bold uppercase py-3 px-4 rounded">
          Start your adventure
        </button>
      </div>
    </div>
  );
};

export default Hero;
