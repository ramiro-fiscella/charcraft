// CharacterForm.js
import React, { useState } from "react";
import axios from "axios";
import UploadWidget from "./UploadWidget";

const CharacterForm = ({ closeForm }) => {
  const [character, setCharacter] = useState({
    char_name: "",
    race: "",
    char_class: "",
    level: "",
    avatar_url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (url) => {
    setCharacter((prevState) => ({
      ...prevState,
      avatar_url: url,
    }));
  };

  const handleSubmit = async (event) => {
    console.log(character);
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/characters",
        character
      );
      console.log("Character created:", response.data);
    } catch (err) {
      console.error("Error creating character:", err);
    }
  };

  return (
    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-neutral-950 bg-opacity-60">
      <form
        className="rounded-lg w-[400px] m-auto h-[640px] p-14 flex flex-col items-center justify-center gap-4 bg-neutral-950 bg-opacity-90"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl">Create Character</h2>
        <label>
          Name:
          <input
            type="text"
            name="char_name"
            value={character.char_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Race:
          <input
            type="text"
            name="race"
            value={character.race}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Class:
          <input
            type="text"
            name="char_class"
            value={character.char_class}
            onChange={handleChange}
          />
        </label>
        <label>
          Level:
          <input
            type="number"
            name="level"
            value={character.level}
            onChange={handleChange}
          />
        </label>
        <div className="w-full">
          <label>Upload Character Image</label>
          <UploadWidget onImageUpload={handleImageUpload} />
        </div>

        <div className="flex flex-col gap-2 w-full mt-16">
          <button type="submit">Create Character</button>
        </div>

        <button
          className="flex bg-transparent text-slate-50 text-sm underline underline-offset-4 items-center justify-center"
          onClick={closeForm}
        >
          CLOSE
        </button>
      </form>
    </div>
  );
};

export default CharacterForm;
