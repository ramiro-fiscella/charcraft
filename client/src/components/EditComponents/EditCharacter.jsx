import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditCharacter = ({ id }) => {
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

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

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <form>
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
      <input
        type="text"
        name="avatar_url"
        value={character.avatar_url}
        onChange={handleInputChange}
      />

      <button onClick={handleSave}>Guardar</button>
    </form>
  );
};

export default EditCharacter;
