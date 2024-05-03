// CharacterForm.js
import React, { useState } from "react";
import axios from "axios";
import UploadWidget from "../UploadWidget";

const CharacterForm = () => {
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
    <div>
      <form onSubmit={handleSubmit}>
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

        <UploadWidget onImageUpload={handleImageUpload} />
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
};

export default CharacterForm;
