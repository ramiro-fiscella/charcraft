import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import CharacterModal from "../../components/CharacterModal/CharacterModal";
import getCharacterById from "../../services/getCharacterById";
import axios from "axios";

const CharactersView = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get(
          "http://localhost:5000/characters/all"
        );
        setCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    }

    fetchCharacters();
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
    <div>
      {/* Render all characters as cards */}
      {characters.map((character) => (
        <Card
          key={character.id}
          character={character}
          onClick={() => handleCardClick(character)}
        />
      ))}

      {/* Render modal if a character is selected */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default CharactersView;
