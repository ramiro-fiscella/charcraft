import React, { useState } from "react";
import axios from "axios";

const CharacterForm = () => {
  const [character, setCharacter] = useState({
    char_name: "",
    race: "",
    char_class: "",
    level: 1,
    // avatar_url: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/characters", character);
      console.log("Personaje creado:", response.data);
    } catch (err) {
      console.error("Error al crear el personaje:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 mt-4 m-auto flex flex-col items-center justify-evenly gap-2"
    >
      <label>
        Nombre:
        <input
          type="text"
          name="char_name"
          value={character.char_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Raza:
        <input
          type="text"
          name="race"
          value={character.race}
          onChange={handleChange}
        />
      </label>
      <label>
        Clase:
        <input
          type="text"
          name="char_class"
          value={character.char_class}
          onChange={handleChange}
        />
      </label>
      <label>
        Nivel:
        <input
          type="number"
          name="level"
          value={character.level}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Crear personaje</button>
    </form>
  );
};

export default CharacterForm;
