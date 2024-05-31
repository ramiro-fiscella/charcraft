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
  const navigate = useNavigate();
  const widgetRef = useRef();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/characters/${id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (character) {
      setCharacter((prevCharacter) => ({
        ...prevCharacter,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (imageUrl) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      avatar_url: imageUrl,
    }));
  };

  const handleSave = async () => {
    try {
      if (character) {
        await axios.put(`http://localhost:5000/characters/${id}`, character);
        navigate('/characters');
      }
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
        onClick={() => widgetRef.current.open()}
        className="relative group cursor-pointer mb-2"
      >
        <img
          className="h-32 w-full object-cover cursor-pointer opacity-50 rounded-lg"
          src={character.avatar_url}
          alt="Character avatar"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 hover:border hover:border-yellow-500 hover:rounded-lg  transition-opacity duration-200">
          <span className="text-white text-lg font-semibold">
            Change Avatar
          </span>
        </div>
      </div>
      <UploadWidget ref={widgetRef} onImageUpload={handleImageUpload} />

      <input
        type="text"
        name="char_name"
        value={character.char_name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="race"
        value={character.race}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="char_class"
        value={character.char_class}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="level"
        value={character.level}
        onChange={handleInputChange}
      />
    </form>
  );
});

export default EditCharacter;
