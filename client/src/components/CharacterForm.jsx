import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const CharacterForm = ({ closeForm, addCharacter }) => {
  const { user, isAuthenticated } = useAuth0();
  const [character, setCharacter] = useState({
    char_name: '',
    race: '',
    char_class: '',
    level: '',
    avatar: null,
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setCharacter((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('char_name', character.char_name);
    formData.append('race', character.race);
    formData.append('char_class', character.char_class);
    formData.append('level', character.level);
    if (character.avatar) {
      formData.append('avatar', character.avatar);
    }

    try {
      const response = await axios.post('/characters', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Character created:', response.data);
      addCharacter(response.data); // Agrega el nuevo personaje a la lista de personajes
      navigate(`/characters/edit/${response.data.id}`); // Redirige a la ruta de edición del personaje creado
    } catch (err) {
      console.error('Error creating character:', err);
    }

    window.location.reload();
  };

  if (!isAuthenticated) {
    return (
      <div className="w-[100vw] h-[100vh] absolute top-0 left-0 flex items-center justify-center bg-neutral-950/80 z-50">
        <div className="rounded-lg w-96 border max-w-[400px] mx-auto p-14 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-emerald-900 to-emerald-950">
          <h6 className="text-lg mb-4 text-center text-white">
            Por favor, inicia sesión para crear un personaje.
          </h6>
          <Link className="w-full" to="/login">
            <div
              className="text-center w-full block py-2 px-4 bg-emerald-800/70 to-emerald-700/70 text-white tracking-wider rounded-md uppercase hover:bg-emerald-600/70"
              onClick={closeForm}
            >
              Iniciar Sesión
            </div>
          </Link>
          <div
            className="text-center w-full block py-2 px-4 bg-zinc-900/70 to-zinc-800/70 text-white tracking-wider rounded-md uppercase hover:bg-zinc-800/70"
            onMouseDown={closeForm}
          >
            Volver
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[100vw] h-[100vh] absolute top-0 right-0 lg:top-[-1.1rem] lg:left-[-1.1rem] flex items-center justify-center bg-neutral-950/80 z-50">
      <form
        className="rounded-lg w-[96%] max-w-[400px] mx-auto h-[640px] px-4 pt-14 flex flex-col items-center justify-center gap-2 bg-neutral-950 bg-opacity-90"
        onSubmit={handleSubmit}
      >
        <h4 className="text-2xl text-center">Crea tu Personaje</h4>
        <label className="font-light text-white">
          Nombre:
          <input
            type="text"
            name="char_name"
            value={character.char_name}
            onChange={handleChange}
            className="block w-full mt-1"
          />
        </label>
        <label className="font-light text-white">
          Raza:
          <input
            type="text"
            name="race"
            value={character.race}
            onChange={handleChange}
            className="block w-full mt-1"
          />
        </label>
        <label className="font-light text-white">
          Clase:
          <input
            type="text"
            name="char_class"
            value={character.char_class}
            onChange={handleChange}
            className="block w-full mt-1"
          />
        </label>
        <label className="font-light text-white">
          Nivel:
          <input
            type="number"
            name="level"
            value={character.level}
            onChange={handleChange}
            className="block w-full mt-1"
          />
        </label>

        <div className="*:block  w-full flex items-center justify-between gap-4">
          <UploadWidget className="w-1/2" onImageUpload={handleImageUpload} />
          {character.avatar_url && (
            <img
              className="rounded w-1/2 object-cover"
              src={character.avatar_url}
              alt="Thumbnail"
            />
          )}
        </div>

        <div className="flex flex-col gap-2 w-full h-full mt-4">
          <button type="submit">Crear personaje</button>
        </div>
        <button
          onMouseDown={closeForm}
          className="fixed right-4 bottom-4 text-[16px] rounded-full p-4"
        >
          <FaArrowLeft />
        </button>
      </form>
    </div>
  );
};

export default CharacterForm;
