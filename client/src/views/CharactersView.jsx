import React, { useState, useEffect } from 'react';
import { CharacterDetails } from '../views';
import { CardCopy } from '../components';
import { fetchCharacters, getCharacterById } from '../services';

const CharactersView = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const charactersData = await fetchCharacters();
        setCharacters(charactersData);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    }

    fetchData();
  }, []);

  const handleCardClick = async (character) => {
    console.log('Selected Character ID:', character.id);
    try {
      const characterData = await getCharacterById(character.id);
      console.log('Fetched Character Data:', characterData);
      setSelectedCharacter(characterData);
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  };

  return (
    <div className="w-full h-min flex flex-col gap-8 mt-[-5px] py-24 pt-32 px-4 justify-between items-center bg-gradient-to-b from-zinc-900/10 to-teal-900/40 border-double border-y-4 border-yellow-500">
      {/* <img src="https://img.icons8.com/?size=100&id=V94sWYyqqIaX&format=png&color=FAB005" /> */}
      <img src="https://img.icons8.com/?size=100&id=Jtv187xsQJWd&format=png&color=FAB005" />
      <h1 className="max-w-[1200px] m-auto md:px-24 inset-4 md:inset-8 font-bold text-3xl md:text-4xl text-center text-white">
        Personajes de la comunidad
      </h1>

      <div className="px-8">
        <p className="text-center text-lg leading-6 font-light mb-6 text-pretty">
          Haz click en una carta para ver o editar la hoja de personaje.
        </p>
        <div className="max-w-[1200px] w-full m-auto my-12 mb-24 flex justify-center flex-wrap gap-8">
          {characters.map((character) => (
            <CardCopy
              key={character.id}
              character={character}
              onClick={() => handleCardClick(character)}
            />
          ))}
        </div>

        {selectedCharacter && (
          <CharacterDetails
            character={selectedCharacter}
            onClose={() => setSelectedCharacter(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CharactersView;
