import React from "react";

const HomeSection = () => {
  return (
    <section className="container mx-auto my-20 py-12 px-4">
      <div className="flex justify-center gap-24 items-start" id="filler">
        <div className="flex flex-col w-1/2">
          <h3 className="text-3xl font-bold mb-4">Filler Info</h3>
          <p className="text-lg mb-6 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum
            consectetur ut eius repellendus, est sit quisquam excepturi
            laboriosam. Minus esse eos itaque animi porro expedita unde pariatur
            tempore ipsum velit ab consequuntur, doloremque fugiat iure? At
            repellat amet, cum nemo pariatur vel ex labore? Minima ad aut non
            velit!
          </p>
          <button>View More</button>
        </div>

        <div>
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/305231400/original/90a39c5e8c3893ce5644be2bb7a52caa6e1a0bd1/create-your-dnd-or-fantasy-character.png"
            alt="Imagen"
            className="object-cover w-[350px] h-[420px] rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
