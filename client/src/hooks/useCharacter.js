import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/characters/${id}`
        );
        setCharacter(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  const updateCharacter = async (character) => {
    try {
      await axios.put(`http://localhost:5000/characters/${id}`, character);
    } catch (err) {
      setError(err);
    }
  };

  return { character, setCharacter, loading, error, updateCharacter };
};

export default useCharacter;
