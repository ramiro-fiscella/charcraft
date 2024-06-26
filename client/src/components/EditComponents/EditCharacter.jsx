import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import UploadWidget from '../../services/UploadWidget';

const EditCharacter = forwardRef((params, ref) => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const widgetRef = useRef();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`/characters/${id}`);
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    validateInput(name, value); // Validamos el campo al cambiar

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  const validateInput = (name, value) => {
    let error = '';
    const maxCharacters = 40;

    if (value.trim() === '') {
      error = 'Este campo es requerido';
    } else if (value.length > maxCharacters) {
      error = `El campo no debe exceder los ${maxCharacters} caracteres`;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleImageUpload = (imageUrl) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      avatar_url: imageUrl,
    }));
  };

  const handleSave = async () => {
    // Verificamos si hay errores antes de guardar
    const hasErrors = Object.values(errors).some((error) => error !== '');

    if (hasErrors) {
      console.error('No se puede guardar, hay errores en los valores');
      return;
    }

    try {
      await axios.put(`/characters/${id}`, character);
      navigate('/characters');
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };

  useImperativeHandle(ref, () => ({
    handleSave,
  }));

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <form className="p-4 border rounded-xl border-neutral-800">
      <div
        onMouseDown={() => widgetRef.current.open()}
        className="relative group cursor-pointer mb-2"
      >
        <img
          className="h-32 w-full object-cover cursor-pointer opacity-50 rounded-lg"
          src={character.avatar_url}
          alt="Character avatar"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 hover:border hover:border-yellow-500 hover:rounded-lg transition-opacity duration-200">
          <span className="text-white text-lg font-semibold">
            Cambiar Avatar
          </span>
        </div>
      </div>
      <UploadWidget ref={widgetRef} onImageUpload={handleImageUpload} />

      <label className="font-condensed" htmlFor="char_name">
        Nombre:
      </label>
      <input
        type="text"
        name="char_name"
        value={character.char_name}
        onChange={handleInputChange}
        onBlur={(e) => validateInput(e.target.name, e.target.value)}
      />
      {errors.char_name && (
        <span className="text-xs text-red-500">{errors.char_name}</span>
      )}

      <label className="font-condensed" htmlFor="race">
        Raza:
      </label>
      <input
        list="race"
        type="text"
        name="race"
        value={character.race}
        onChange={handleInputChange}
        onBlur={(e) => validateInput(e.target.name, e.target.value)}
      />
      {errors.race && (
        <span className="text-xs text-red-500">{errors.race}</span>
      )}
      <datalist id="race">
        <option value="Humano" />
        <option value="Elfo" />
        <option value="Enano" />
        <option value="Gnomo" />
        <option value="Orco" />
        <option value="Tiefling" />
      </datalist>

      <label className="font-condensed" htmlFor="char_class">
        Clase:
      </label>
      <input
        list="char_class"
        type="text"
        name="char_class"
        value={character.char_class}
        onChange={handleInputChange}
        onBlur={(e) => validateInput(e.target.name, e.target.value)}
      />
      {errors.char_class && (
        <span className="text-xs text-red-500">{errors.char_class}</span>
      )}
      <datalist id="char_class">
        <option value="Cazador" />
        <option value="Guerrero" />
        <option value="Mago" />
        <option value="Paladín" />
        <option value="Druida" />
        <option value="Sacerdote" />
        <option value="Bardo" />
      </datalist>

      <label className="font-condensed" htmlFor="level">
        Nivel:
      </label>
      <input
        type="number"
        name="level"
        value={character.level}
        onChange={handleInputChange}
        onBlur={(e) => validateInput(e.target.name, e.target.value)}
      />
      {errors.level && (
        <span className="text-xs text-red-500">{errors.level}</span>
      )}
    </form>
  );
});

export default EditCharacter;
