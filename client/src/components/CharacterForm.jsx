import React, { useState } from 'react';
import axios from 'axios';
import UploadWidget from '../services/UploadWidget';
import { useAuth0 } from '@auth0/auth0-react';

const CharacterForm = ({ closeForm }) => {
  const { user } = useAuth0();
  const [character, setCharacter] = useState({
    char_name: '',
    race: '',
    char_class: '',
    level: '',
    avatar_url: '',
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
    event.preventDefault();
    const characterData = {
      ...character,
      auth0_id: user.sub, // Assuming user.sub is the unique identifier from Auth0
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/characters',
        characterData
      );
      console.log('Character created:', response.data);
    } catch (err) {
      console.error('Error creating character:', err);
    }
  };

  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 flex items-center justify-center bg-neutral-950 ">
      <form
        className="rounded-lg w-[96%] max-w-[400px] mx-auto  h-[640px] p-14 flex flex-col items-center justify-center gap-4 bg-neutral-950 bg-opacity-90"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl">Crea tu Personaje</h2>
        <label className="font-light">
          Nombre:
          <input
            type="text"
            name="char_name"
            value={character.char_name}
            onChange={handleChange}
          />
        </label>
        <label className="font-light">
          Raza:
          <input
            type="text"
            name="race"
            value={character.race}
            onChange={handleChange}
          />
        </label>
        <label className="font-light">
          Clase:
          <input
            type="text"
            name="char_class"
            value={character.char_class}
            onChange={handleChange}
          />
        </label>
        <label className="font-light">
          Nivel:
          <input
            type="number"
            name="level"
            value={character.level}
            onChange={handleChange}
          />
        </label>
        <div className="*:block *:w-full w-full flex flex-col items-center justify-between gap-2">
          <label className="font-light w-1/2">
            Sube una imágen de tu personaje
          </label>
          <UploadWidget onImageUpload={handleImageUpload} />
        </div>

        <div className="flex flex-col gap-2 w-full h-full mt-16">
          <button type="submit">Crear personaje</button>
        </div>

        <button
          className="flex  bg-transparent text-slate-50 text-sm w-full tems-center justify-center"
          onClick={closeForm}
        >
          Cerrar
        </button>
      </form>
    </div>
  );
};

export default CharacterForm;
