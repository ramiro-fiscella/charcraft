import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditAttributes = () => {
  const { id } = useParams();
  const [attributes, setAttributes] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });

  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/characters/${id}/attributes`
        );
        const {
          id: attributeId,
          character_id,
          ...attributesData
        } = response.data;
        setAttributes(attributesData);
      } catch (error) {
        console.log('Error fetching attributes:', error);
      }
    };

    fetchAttributes();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/characters/${id}/attributes`,
        attributes
      );
      console.log('Attributes saved:', attributes);
    } catch (error) {
      console.error('Error saving attributes');
    }
  };

  return (
    <div className="p-4 border border-neutral-800 rounded-xl">
      <h2 className="text-xl text-center">Editar Atributos</h2>
      <form>
        <ul className="flex gap-4 mt-4">
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="death_save_success"
            >
              Fuerza
            </label>
            <input
              type="number"
              name="strength"
              value={attributes.strength}
              onChange={handleChange}
            />
          </li>
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="death_save_failure"
            >
              Destreza
            </label>
            <input
              type="number"
              name="dexterity"
              value={attributes.dexterity}
              onChange={handleChange}
            />
          </li>
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="death_save_failure"
            >
              Constitución
            </label>
            <input
              type="number"
              name="constitution"
              value={attributes.constitution}
              onChange={handleChange}
            />
          </li>
        </ul>

        <ul className="flex gap-4 mt-4">
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="death_save_success"
            >
              Inteligencia
            </label>
            <input
              type="number"
              name="intelligence"
              value={attributes.intelligence}
              onChange={handleChange}
            />
          </li>
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="death_save_failure"
            >
              Sabiduría
            </label>
            <input
              type="number"
              name="wisdom"
              value={attributes.wisdom}
              onChange={handleChange}
            />
          </li>
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="death_save_failure"
            >
              Carisma
            </label>
            <input
              type="number"
              name="charisma"
              value={attributes.charisma}
              onChange={handleChange}
            />
          </li>
        </ul>

        <button className="w-full h-10 p-2 mt-4" onClick={handleSave}>
          Guardar
        </button>
      </form>
    </div>
  );
};

export default EditAttributes;
