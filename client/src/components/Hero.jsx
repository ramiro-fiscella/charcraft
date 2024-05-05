import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[75vh] overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="https://cdna.artstation.com/p/assets/images/images/010/629/620/large/ryan-richmond-planets.jpg?1525397919"
        alt="Hero Background"
        className="absolute inset-0 object-cover bg-top w-full h-full left-0"
      />

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
        <h1 className="text-5xl font-bold mb-4">¡Bienvenido!</h1>
        <p className="text-lg font-bold mb-6">
          Descubre un mundo de aventuras.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default Hero;
