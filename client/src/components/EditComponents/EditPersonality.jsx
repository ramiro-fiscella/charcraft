import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditPersonality = forwardRef((props, ref) => {
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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchPersonalityStats = async () => {
      try {
        const response = await axios.get(`/characters/${id}/personality`);
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

  const validateInput = (name, value) => {
    let error = '';
    const maxCharacters = 100; // Definimos el número máximo de caracteres permitidos

    if (value.length > maxCharacters) {
      error = `El campo no debe exceder los ${maxCharacters} caracteres`;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSave = async () => {
    // Validate all fields before saving
    const hasErrors = Object.values(errors).some((error) => error !== '');

    if (hasErrors) {
      console.error('No se puede guardar, hay errores en los valores');
      return;
    }

    try {
      await axios.put(`/characters/${id}/personality`, personalityStats);
      console.log('Personality stats saved:', personalityStats);
    } catch (error) {
      console.error('Error saving personality stats:', error);
    }
  };

  // Expose the handleSave method to the parent component via ref
  useImperativeHandle(ref, () => ({
    handleSave,
  }));

  return (
    <div className="p-4 border border-neutral-800 rounded-xl">
      <h6 className="mb-6 text-lg font-normal text-center">
        Rasgos y personalidad
      </h6>
      <label className="font-condensed">
        Alineamiento:
        <input
          type="text"
          name="alignment"
          value={personalityStats.alignment}
          onChange={handleChange}
          onBlur={(e) => validateInput(e.target.name, e.target.value)}
          list="alignmentOptions"
        />
        <datalist id="alignmentOptions">
          <option value="Legal bueno" />
          <option value="Neutral bueno" />
          <option value="Caótico bueno" />
          <option value="Legal neutral" />
          <option value="Neutral" />
          <option value="Caótico neutral" />
          <option value="Legal malo" />
          <option value="Neutral malo" />
          <option value="Caótico malo" />
        </datalist>
        {errors.alignment && (
          <span className="font-condensed text-xs text-red-500">
            {errors.alignment}
          </span>
        )}
      </label>
      <label className="font-condensed">
        Rasgos de personalidad:
        <input
          type="text"
          name="personality_traits"
          value={personalityStats.personality_traits}
          onChange={handleChange}
          onBlur={(e) => validateInput(e.target.name, e.target.value)}
        />
        {errors.personality_traits && (
          <span className="font-condensed text-xs text-red-500">
            {errors.personality_traits}
          </span>
        )}
      </label>
      <label className="font-condensed">
        Ideales:
        <input
          type="text"
          name="ideals"
          value={personalityStats.ideals}
          onChange={handleChange}
          onBlur={(e) => validateInput(e.target.name, e.target.value)}
        />
        {errors.ideals && (
          <span className="font-condensed text-xs text-red-500">
            {errors.ideals}
          </span>
        )}
      </label>
      <label className="font-condensed">
        Vínculos:
        <input
          type="text"
          name="bonds"
          value={personalityStats.bonds}
          onChange={handleChange}
          onBlur={(e) => validateInput(e.target.name, e.target.value)}
        />
        {errors.bonds && (
          <span className="font-condensed text-xs text-red-500">
            {errors.bonds}
          </span>
        )}
      </label>
      <label className="font-condensed">
        Defectos:
        <input
          type="text"
          name="flaws"
          value={personalityStats.flaws}
          onChange={handleChange}
          onBlur={(e) => validateInput(e.target.name, e.target.value)}
        />
        {errors.flaws && (
          <span className="font-condensed text-xs text-red-500">
            {errors.flaws}
          </span>
        )}
      </label>
      <label className="font-condensed">
        Frase:
        <input
          type="text"
          name="quote"
          value={personalityStats.quote}
          onChange={handleChange}
          onBlur={(e) => validateInput(e.target.name, e.target.value)}
        />
        {errors.quote && (
          <span className="font-condensed text-xs text-red-500">
            {errors.quote}
          </span>
        )}
      </label>
      <label className="font-condensed">
        Características y rasgos (separados por comas):
        <input
          type="text"
          name="features_and_traits"
          value={personalityStats.features_and_traits.join(', ')}
          onChange={handleArrayChange}
          onBlur={(e) => validateInput(e.target.name, e.target.value)}
        />
        {errors.features_and_traits && (
          <span className="font-condensed text-xs text-red-500">
            {errors.features_and_traits}
          </span>
        )}
      </label>
      <label className="font-condensed">
        Idiomas (separados por comas):
        <input
          type="text"
          name="languages"
          value={personalityStats.languages.join(', ')}
          onChange={handleArrayChange}
          onBlur={(e) => validateInput(e.target.name, e.target.value)}
        />
        {errors.languages && (
          <span className="font-condensed text-xs text-red-500">
            {errors.languages}
          </span>
        )}
      </label>
      <label className="font-condensed">
        Otras competencias (separadas por comas):
        <input
          type="text"
          name="other_proficiencies"
          value={personalityStats.other_proficiencies.join(', ')}
          onChange={handleArrayChange}
          onBlur={(e) => validateInput(e.target.name, e.target.value)}
        />
        {errors.other_proficiencies && (
          <span className="font-condensed text-xs text-red-500">
            {errors.other_proficiencies}
          </span>
        )}
      </label>
    </div>
  );
});

export default EditPersonality;
