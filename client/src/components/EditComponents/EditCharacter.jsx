// EditCharacter.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useCharacter from '../hooks/useCharacter';
import CharacterForm from '../components/CharacterForm';

const EditCharacter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { character, setCharacter, loading, error, updateCharacter } =
    useCharacter(id);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    await updateCharacter(character);
    navigate('/characters');
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <CharacterForm
      character={character}
      onChange={handleInputChange}
      onSave={handleSave}
    />
  );
};

export default EditCharacter;
