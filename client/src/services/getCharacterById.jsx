import axios from "axios";

const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error;
  }
};

export default getCharacterById;
