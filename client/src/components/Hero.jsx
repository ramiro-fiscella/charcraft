import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden bg-fixed bg-parallax bg-cover">
      <div className="absolute bottom-0 w-[100vw] h-44 bg-gradient-to-t from-zinc-950"></div>
      <div className="relative h-full max-w-[1200px] m-auto">
        <div className="absolute md:w-[30rem] max-w-[1200px]  inset-4 md:inset-8 flex flex-col items-start justify-center text-center text-white">
          <h1 className="text-4xl xl:text-6xl text-left font-semibold mb-4">
            Forge Your Own Legends
          </h1>
          <p className="text-lg text-left leading-6 font-normal mb-6">
            There can't be a good adventure if there are no good characters.
            Unleash your creativity with our{' '}
            <span className="text-yellow-400">
              customizable character sheets!
            </span>
          </p>
          <button className="">Start your adventure</button>
        </div>

        <div className="absolute right-4 md:right-12 bottom-8 text-sm text-right">
          <p className="font-normal">Art by Andrii Shafetov</p>
          <a
            target="_blank"
            href="https://andriishafetov.artstation.com/"
            className=" text-emerald-600 underline-offset-2 underline"
          >
            Link to his website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
