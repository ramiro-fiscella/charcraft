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
    <div className="relative h-[90vh] overflow-hidden">
      <img
        src="https://cdnb.artstation.com/p/assets/images/images/006/036/033/original/andrii-shafetov-ancient-ruins-fx.gif?1497372245"
        // src="https://cdna.artstation.com/p/assets/images/images/010/629/620/large/ryan-richmond-planets.jpg?1525397919"
        alt="Hero Background"
        className="absolute inset-0 bg-top object-cover w-full h-full left-0 parallax "
        data-speed="0.5" // Adjust parallax effect
      />

      <div className="absolute md:w-[30rem] max-w-[1200px] md:ml-6 inset-8 flex flex-col items-start justify-center text-center text-white">
        <h1 className="text-4xl sm:text-6xl text-left font-semibold mb-4">
          Forge Your Own Legends
        </h1>
        <p className="text-xl text-left leading-6 font-medium mb-6">
          There can't be a good adventure if there are no good characters.
          Unleash your creativity with our{" "}
          <span className="text-yellow-400">
            customizable character sheets!
          </span>
        </p>
        <button className="">Start your adventure</button>
      </div>

      <div className="absolute bottom-0 w-full h-44 bg-gradient-to-t from-zinc-950">
        <div className="absolute  right-12 bottom-8 text-right">
          <p>Art by Andrii Shafetov</p>
          <a
            target="_blank"
            href="https://andriishafetov.artstation.com/"
            className=" text-emerald-500 underline-offset-2 underline"
          >
            Link to his website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
