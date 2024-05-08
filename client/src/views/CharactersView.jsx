import React, { useState, useEffect } from "react";
import { CharacterDetails } from "../views";
import { Card, CardCopy } from "../components";
import { fetchCharacters } from "../services";

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
      <h2 className="text-center mt-28">Your Characters</h2>
      <p className="text-center">
        Click on a character card to see more details and edit.
      </p>
      <div className="max-w-[1200px] w-full m-auto my-24 flex justify-center flex-wrap gap-8">
        {characters.map((character) => (
          // <CardCopy
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
    </>
  );
};

export default CharactersView;
