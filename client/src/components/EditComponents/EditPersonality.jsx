import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditPersonality = () => {
  const { id } = useParams();
  const [personalityStats, setPersonalityStats] = useState({
    alignment: '',
    personality_traits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    quote: '',
    features_and_traits: [],
    languages: [],
    other_proficiencies: [],
  });

  useEffect(() => {
    const fetchPersonalityStats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/characters/${id}/personality`
        );
        setPersonalityStats(response.data);
      } catch (err) {
        console.error('Error fetching personality stats:', err);
      }
    };

    fetchPersonalityStats();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalityStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setPersonalityStats((prevStats) => ({
      ...prevStats,
      [name]: value.split(',').map((item) => item.trim()), // Split and trim input
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/characters/${id}/personality`,
        personalityStats
      );
      console.log('Personality stats saved:', personalityStats);
    } catch (error) {
      console.error('Error saving personality stats:', error);
    }
  };

  return (
    <div className="p-4 border border-neutral-800 rounded-xl">
      <h2 className="text-xl text-center mb-4">Rasgos y personalidad</h2>
      <label>
        Alineamiento:
        <input
          type="text"
          name="alignment"
          value={personalityStats.alignment}
          onChange={handleChange}
        />
      </label>
      <label>
        Rasgos de personalidad:
        <input
          type="text"
          name="personality_traits"
          value={personalityStats.personality_traits}
          onChange={handleChange}
        />
      </label>
      <label>
        Ideales:
        <input
          type="text"
          name="ideals"
          value={personalityStats.ideals}
          onChange={handleChange}
        />
      </label>
      <label>
        Vínculos:
        <input
          type="text"
          name="bonds"
          value={personalityStats.bonds}
          onChange={handleChange}
        />
      </label>
      <label>
        Defectos:
        <input
          type="text"
          name="flaws"
          value={personalityStats.flaws}
          onChange={handleChange}
        />
      </label>
      <label>
        Cita:
        <input
          type="text"
          name="quote"
          value={personalityStats.quote}
          onChange={handleChange}
        />
      </label>
      <label>
        Características y rasgos (separados por comas):
        <input
          type="text"
          name="features_and_traits"
          value={personalityStats.features_and_traits.join(', ')}
          onChange={handleArrayChange}
        />
      </label>
      <label>
        Idiomas (separados por comas):
        <input
          type="text"
          name="languages"
          value={personalityStats.languages.join(', ')}
          onChange={handleArrayChange}
        />
      </label>
      <label>
        Otras competencias (separadas por comas):
        <input
          type="text"
          name="other_proficiencies"
          value={personalityStats.other_proficiencies.join(', ')}
          onChange={handleArrayChange}
        />
      </label>
      <button className="w-full h-10 p-2 mt-4" onClick={handleSave}>
        Guardar
      </button>
    </div>
  );
};

export default EditPersonality;
