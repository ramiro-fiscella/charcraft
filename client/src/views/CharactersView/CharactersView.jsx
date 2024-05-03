import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../../components/Card/Card";

const CharactersView = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/characters/all"
        );
        setCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}{" "}
    </div>
  );
};

export default CharactersView;
