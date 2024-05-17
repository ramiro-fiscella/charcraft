import { useState } from 'react';
import axios from 'axios';

const useCreateCharacter = () => {
  const [character, setCharacter] = useState({
    char_name: '',
    race: '',
    char_class: '',
    level: '',
    avatar_url: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (url) => {
    setCharacter((prevState) => ({
      ...prevState,
      avatar_url: url,
    }));
  };

  const createCharacter = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:5000/characters',
        character
      );
      return response.data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    character,
    handleChange,
    handleImageUpload,
    createCharacter,
    loading,
    error,
  };
};

export default useCreateCharacter;
