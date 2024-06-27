import React, { useState, useEffect } from 'react';
import { Hero, FillerInfo, Banner } from '../components';
import { CharactersView } from '../views';
import CharacterForm from '../components/CharacterForm';
import { fetchCharacters } from '../services'; // Importa la función fetchCharacters

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData(); // Llama a fetchData() cuando se monta el componente
  }, []);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const fetchData = async () => {
    try {
      const charactersData = await fetchCharacters();
      setCharacters(charactersData);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const addCharacter = (newCharacter) => {
    setCharacters([...characters, newCharacter]); // Agrega el nuevo personaje a la lista de personajes
  };

  return (
    <>
      <Hero openForm={openForm} />
      {isFormOpen && (
        <CharacterForm closeForm={closeForm} addCharacter={addCharacter} />
      )}
      <div className="w-full absolute h-48 pointer-events-none bg-gradient-to-b from-zinc-950"></div>
      <Banner />
      <CharactersView characters={characters} />
    </>
  );
};

export default Home;
