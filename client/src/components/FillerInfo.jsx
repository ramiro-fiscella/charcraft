import React from "react";

const HomeSection = () => {
  return (
    <section className="mt-32 mx-8">
      <div
        className="flex justify-center gap-12 lg:gap-24 items-start "
        id="filler"
      >
        <div className="flex flex-col justify-evenly h-[420px] w-96 text-left z-30  rounded-xl">
          <h2 className="text-3xl mb-4">What is Charcraft?</h2>
          <p className="text-lg leading-6 font-light mb-6 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            eveniet, dolorem error, tempora temporibus dignissimos id nobis
            veniam eaque adipisci provident corporis reprehenderit? Odit,
            placeat reiciendis dolores dolor quasi id qui nulla cupiditate
            voluptate voluptates sint eaque totam nostrum fugit, perspiciatis
            ratione rem. Necessitatibus iure autem itaque enim ex adipisci.
          </p>
          <button className="shadow-md shadow-zinc-950">View More</button>
        </div>

        <div>
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/305231400/original/90a39c5e8c3893ce5644be2bb7a52caa6e1a0bd1/create-your-dnd-or-fantasy-character.png"
            alt="Imagen"
            className="object-cover w-[350px] h-[420px]  rounded-lg shadow-md shadow-zinc-950"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
