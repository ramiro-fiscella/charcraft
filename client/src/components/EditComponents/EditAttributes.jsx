import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditAttributes = forwardRef((params, ref) => {
  const { id } = useParams();
  const [attributes, setAttributes] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        const response = await axios.get(`/characters/${id}/attributes`);
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

  const validateAttributes = (name, value) => {
    let error = '';
    if (value < 1 || value > 99) {
      error = 'El valor debe ser entre 1 y 99';
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value, 10);
    validateAttributes(name, intValue);
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [name]: intValue,
    }));
  };

  const handleSave = async () => {
    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) {
      console.error('No se puede guardar, hay errores en los valores');
      return;
    }

    try {
      await axios.put(`/characters/${id}/attributes`, attributes);
      console.log('Attributes saved:', attributes);
    } catch (error) {
      console.error('Error saving attributes');
    }
  };

  useImperativeHandle(ref, () => ({
    handleSave,
  }));

  return (
    <div className="p-4 border border-neutral-800 rounded-xl">
      <h6 className="text-lg font-normal text-center">Atributos</h6>
      <form>
        <ul className="flex *:flex *:flex-col *:items-center *:gap-1 gap-4 mt-4 *:w-24">
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="strength"
            >
              Fuerza
            </label>
            <input
              type="number"
              name="strength"
              value={attributes.strength}
              onChange={handleChange}
              min="1"
              max="99"
              className="mb-0"
            />
            {errors.strength && (
              <span className="font-condensed  leading-3 text-xs text-red-500">
                {errors.strength}
              </span>
            )}
          </li>
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="dexterity"
            >
              Destreza
            </label>
            <input
              type="number"
              name="dexterity"
              value={attributes.dexterity}
              onChange={handleChange}
              min="1"
              max="99"
              className="mb-0"
            />
            {errors.dexterity && (
              <span className="font-condensed  leading-3 text-xs text-red-500">
                {errors.dexterity}
              </span>
            )}
          </li>
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="constitution"
            >
              Constitución
            </label>
            <input
              type="number"
              name="constitution"
              value={attributes.constitution}
              onChange={handleChange}
              min="1"
              max="99"
              className="mb-0"
            />
            {errors.constitution && (
              <span className="font-condensed  leading-3 text-xs text-red-500">
                {errors.constitution}
              </span>
            )}
          </li>
        </ul>

        <ul className="flex gap-4 mt-4 *:w-24">
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="intelligence"
            >
              Inteligencia
            </label>
            <input
              type="number"
              name="intelligence"
              value={attributes.intelligence}
              onChange={handleChange}
              min="1"
              max="99"
              className="mb-0"
            />
            {errors.intelligence && (
              <span className="font-condensed  leading-3 text-xs text-red-500">
                {errors.intelligence}
              </span>
            )}
          </li>
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="wisdom"
            >
              Sabiduría
            </label>
            <input
              type="number"
              name="wisdom"
              value={attributes.wisdom}
              onChange={handleChange}
              min="1"
              max="99"
              className="mb-0"
            />
            {errors.wisdom && (
              <span className="font-condensed  leading-3 text-xs text-red-500">
                {errors.wisdom}
              </span>
            )}
          </li>
          <li>
            <label
              className="font-condensed text-base mb-1 flex justify-center items-center"
              htmlFor="charisma"
            >
              Carisma
            </label>
            <input
              type="number"
              name="charisma"
              value={attributes.charisma}
              onChange={handleChange}
              min="1"
              max="99"
              className="mb-0"
            />
            {errors.charisma && (
              <span className="font-condensed  leading-3 text-xs text-red-500">
                {errors.charisma}
              </span>
            )}
          </li>
        </ul>
      </form>
    </div>
  );
});

export default EditAttributes;
