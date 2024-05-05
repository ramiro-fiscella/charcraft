import React from "react";

const NavBar = () => {
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <nav className="w-full fixed top-0 left-0 mx-auto p-4 bg-neutral-900 z-40">
      <div className="max-w-[1200px] m-auto flex justify-between items-center">
        <h1 className="text-xl leading-none m-0">🧙‍♂️ Charcraft</h1>
        <ul className="flex gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Characters</a>
          </li>
          <li>
            <a href="">Create</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
