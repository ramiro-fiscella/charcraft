import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { CharacterModal } from "../components";
import { fetchCharacters, getCharacterById } from "../services";

const CharactersView = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const charactersData = await fetchCharacters();
        setCharacters(charactersData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    }

    fetchData();
  }, []);

  const handleCardClick = async (character) => {
    try {
      const characterData = await getCharacterById(character.id);
      setSelectedCharacter(characterData);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  return (
    <>
      <div className="max-w-[1200px] w-full m-auto my-12 flex justify-center flex-wrap gap-8">
        {characters.map((character) => (
          <Card
            key={character.id}
            character={character}
            onClick={() => handleCardClick(character)}
          />
        ))}
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </>
  );
};

export default CharactersView;
