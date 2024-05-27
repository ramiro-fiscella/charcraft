import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditSkills = () => {
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
        const response = await axios.get(
          `http://localhost:5000/characters/${id}/skills`
        );
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
      await axios.put(`http://localhost:5000/characters/${id}/skills`, skills);
      console.log('Skills stats saved:', skills);
    } catch (error) {
      console.error('Error saving skills:', error);
    }
  };

  return (
    <div className="p-4 border border-neutral-800 rounded-xl">
      <h2 className="text-xl mb-4 text-center">Habilidades</h2>
      <form className="w-full m-auto flex flex-col  justify-center gap-2">
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
            <label htmlFor={skill} className="text-lg capitalize">
              {skill.replace(/_/g, ' ')}
            </label>
          </div>
        ))}
      </form>
      <div className="text-center">
        <button className="w-full h-10 p-2 mt-4" onClick={handleSave}>
          Guardar Habilidades
        </button>
      </div>
    </div>
  );
};

export default EditSkills;
