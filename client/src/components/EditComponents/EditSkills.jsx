import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditSkills = forwardRef((props, ref) => {
  const { id } = useParams();
  const [skills, setSkills] = useState({
    acrobatics: false,
    animal_handling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleight_of_hand: false,
    stealth: false,
    survival: false,
  });

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`/characters/${id}/skills`);
        const { id: skillId, character_id, ...skills } = response.data;
        setSkills(skills);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, [id]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSkills((prevSkills) => ({
      ...prevSkills,
      [name]: checked,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`/characters/${id}/skills`, skills);
      console.log('Skills stats saved:', skills);
    } catch (error) {
      console.error('Error saving skills:', error);
    }
  };

  // Expose the handleSave method to the parent component via ref
  useImperativeHandle(ref, () => ({
    handleSave,
  }));

  const skillNames = {
    acrobatics: 'Acrobacias',
    animal_handling: 'Manejo de Animales',
    arcana: 'Arcano',
    athletics: 'Atletismo',
    deception: 'Engaño',
    history: 'Historia',
    insight: 'Perspicacia',
    intimidation: 'Intimidación',
    investigation: 'Investigación',
    medicine: 'Medicina',
    nature: 'Naturaleza',
    perception: 'Percepción',
    performance: 'Actuación',
    persuasion: 'Persuasión',
    religion: 'Religión',
    sleight_of_hand: 'Juego de Manos',
    stealth: 'Sigilo',
    survival: 'Supervivencia',
  };

  const abilityModifiers = {
    acrobatics: '(des)',
    animal_handling: '(sab)',
    arcana: '(int)',
    athletics: '(fue)',
    deception: '(car)',
    history: '(int)',
    insight: '(sab)',
    intimidation: '(car)',
    investigation: '(int)',
    medicine: '(sab)',
    nature: '(sab)',
    perception: '(sab)',
    performance: '(car)',
    persuasion: '(car)',
    religion: '(int)',
    sleight_of_hand: '(des)',
    stealth: '(des)',
    survival: '(sab)',
  };

  return (
    <div className="h-[630px] p-4 border border-neutral-800 rounded-xl">
      <h6 className="text-lg mb-6 font-normal text-center">Habilidades</h6>
      <form className="w-full m-auto flex flex-col justify-center gap-2">
        {Object.keys(skills).map((skill) => (
          <div key={skill} className="flex items-center w-full">
            <input
              type="checkbox"
              id={skill}
              name={skill}
              checked={skills[skill]}
              onChange={handleChange}
              className="w-8 mb-0"
            />
            <label htmlFor={skill} className="text-lg">
              {skillNames[skill]}
              <span className="font-condensed text-xs text-gray-500 ml-1">
                {abilityModifiers[skill]}
              </span>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
});

export default EditSkills;
