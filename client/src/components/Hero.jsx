import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed"));
        element.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[89vh] overflow-hidden">
      <img
        src="https://cdna.artstation.com/p/assets/images/images/010/629/620/large/ryan-richmond-planets.jpg?1525397919"
        alt="Hero Background"
        className="absolute inset-0 bg-top object-cover w-full h-full left-0 parallax"
        data-speed="0.5" // Adjust parallax effect
      />

      <div className="absolute w-[30rem] ml-6 inset-0 flex flex-col items-start justify-center text-center text-white">
        <h1 className="text-6xl text-left font-semibold mb-4">
          Forge Your Own Legends
        </h1>
        <p className="text-xl text-left leading-6 font-medium mb-6">
          There can't be a good adventure if there are no good characters.
          Unleash your creativity with our customizable character sheets!
        </p>
        <button className="font-bold uppercase py-3 px-4 rounded">
          Start your adventure
        </button>
      </div>
    </div>
  );
};

export default Hero;
