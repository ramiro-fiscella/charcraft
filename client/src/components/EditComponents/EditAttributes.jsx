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
          `http://localhost:5000/characters/${id}`
        );
        const { id, character_id, ...attributesData } = response.data;
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
    <div>
      <h1>Edit Attributes</h1>
      <form>
        <label>
          Strength
          <input
            type="number"
            name="strength"
            value={attributes.strength}
            onChange={handleChange}
          />
        </label>
        <label>
          Dexterity
          <input
            type="number"
            name="dexterity"
            value={attributes.dexterity}
            onChange={handleChange}
          />
        </label>
        <label>
          Constitution
          <input
            type="number"
            name="constitution"
            value={attributes.constitution}
            onChange={handleChange}
          />
        </label>
        <label>
          Intelligence
          <input
            type="number"
            name="intelligence"
            value={attributes.intelligence}
            onChange={handleChange}
          />
        </label>
        <label>
          Wisdom
          <input
            type="number"
            name="wisdom"
            value={attributes.wisdom}
            onChange={handleChange}
          />
        </label>
        <label>
          Charisma
          <input
            type="number"
            name="charisma"
            value={attributes.charisma}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditAttributes;
