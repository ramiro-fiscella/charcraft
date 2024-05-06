import axios from "axios";

const fetchCharacters = async () => {
  try {
    const response = await axios.get("http://localhost:5000/characters/all");
    return response.data.map((character) => ({
      ...character,
      quote: character.quote,
    }));
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export default fetchCharacters;
