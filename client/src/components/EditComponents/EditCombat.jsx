import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditCombat = forwardRef((props, ref) => {
  const { id } = useParams();
  const [combatStats, setCombatStats] = useState({
    max_hp: 0,
    current_hp: 0,
    temp_hp: 0,
    armor_class: 0,
    initiative: 0,
    speed: 0,
    hit_dice: '',
    total_hit_dice: 0,
    death_save_success: 0,
    death_save_failure: 0,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCombatStats = async () => {
      try {
        const response = await axios.get(`/characters/${id}/combat`);
        setCombatStats(response.data);
      } catch (err) {
        console.error('Error fetching character:', err);
      }
    };
    fetchCombatStats();
  }, [id]);

  const validateCombatStats = (name, value) => {
    let error = '';
    if (
      [
        'max_hp',
        'current_hp',
        'temp_hp',
        'armor_class',
        'initiative',
        'speed',
        'total_hit_dice',
        'death_save_success',
        'death_save_failure',
      ].includes(name)
    ) {
      if (value < 0) {
        error = 'El valor debe ser mayor o igual a 0';
      }
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value, 10);
    validateCombatStats(name, intValue);
    setCombatStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const hasErrors = Object.values(errors).some((error) => error);

    if (hasErrors) {
      console.error('No se puede guardar, hay errores en los valores');
      return;
    }

    try {
      await axios.put(`/characters/${id}/combat`, combatStats);
      console.log('Combat stats saved:', combatStats);
    } catch (err) {
      console.error('Error saving combat stats:', err);
    }
  };

  useImperativeHandle(ref, () => ({
    handleSave,
  }));

  return (
    <div className="p-4 border rounded-xl border-neutral-800">
      <h6 className="mb-6 text-lg font-normal text-center">
        Estadísticas de Combate
      </h6>
      <ul className="flex *:flex *:flex-col *:items-center *:gap-1 gap-4 mt-4 *:w-24">
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="max_hp"
          >
            HP Máx
          </label>
          <input
            className="h-12 mb-0 full text-2xl px-2"
            type="number"
            id="max_hp"
            name="max_hp"
            value={combatStats.max_hp}
            onChange={handleChange}
          />
          {errors.max_hp && (
            <span className="font-condensed text-xs text-red-500">
              {errors.max_hp}
            </span>
          )}
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="current_hp"
          >
            HP Actual
          </label>
          <input
            className="h-12 mb-0 full text-2xl px-2"
            type="number"
            id="current_hp"
            name="current_hp"
            value={combatStats.current_hp}
            onChange={handleChange}
          />
          {errors.current_hp && (
            <span className="font-condensed text-xs text-red-500">
              {errors.current_hp}
            </span>
          )}
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="temp_hp"
          >
            HP Temp
          </label>
          <input
            className="h-12 mb-0 full text-2xl px-2"
            type="number"
            id="temp_hp"
            name="temp_hp"
            value={combatStats.temp_hp}
            onChange={handleChange}
          />
          {errors.temp_hp && (
            <span className="font-condensed text-xs text-red-500">
              {errors.temp_hp}
            </span>
          )}
        </li>
      </ul>

      <ul className="flex *:flex *:flex-col *:items-center *:gap-1 gap-4 mt-4 *:w-24">
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="armor_class"
          >
            Armadura
          </label>
          <input
            className="h-12 mb-0 full text-2xl px-2"
            type="number"
            id="armor_class"
            name="armor_class"
            value={combatStats.armor_class}
            onChange={handleChange}
          />
          {errors.armor_class && (
            <span className="font-condensed text-xs text-red-500">
              {errors.armor_class}
            </span>
          )}
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="initiative"
          >
            Iniciativa
          </label>
          <input
            className="h-12 mb-0 full text-2xl px-2"
            type="number"
            id="initiative"
            name="initiative"
            value={combatStats.initiative}
            onChange={handleChange}
          />
          {errors.initiative && (
            <span className="font-condensed text-xs text-red-500">
              {errors.initiative}
            </span>
          )}
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="speed"
          >
            Velocidad
          </label>
          <input
            className="h-12 mb-0 full text-2xl px-2"
            type="number"
            id="speed"
            name="speed"
            value={combatStats.speed}
            onChange={handleChange}
          />
          {errors.speed && (
            <span className="font-condensed text-xs text-red-500">
              {errors.speed}
            </span>
          )}
        </li>
      </ul>

      <ul className="flex *:flex *:flex-col *:items-center *:gap-1 gap-4 mt-4 *:w-48 *:*:mb-0">
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="hit_dice"
          >
            Dados de Golpe
          </label>
          <input
            type="text"
            id="hit_dice"
            name="hit_dice"
            value={combatStats.hit_dice}
            onChange={handleChange}
          />
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="total_hit_dice"
          >
            Total D. de Golpe
          </label>
          <input
            type="text"
            id="total_hit_dice"
            name="total_hit_dice"
            value={combatStats.total_hit_dice}
            onChange={handleChange}
          />
          {errors.total_hit_dice && (
            <span className="font-condensed text-xs text-red-500">
              {errors.total_hit_dice}
            </span>
          )}
        </li>
      </ul>

      <ul className="flex *:flex *:flex-col *:items-center *:gap-1 gap-4 mt-4 *:w-48 *:*:mb-0">
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="death_save_success"
          >
            Éxito en Salvación
          </label>
          <input
            type="number"
            id="death_save_success"
            name="death_save_success"
            value={combatStats.death_save_success}
            onChange={handleChange}
          />
          {errors.death_save_success && (
            <span className="font-condensed text-xs text-red-500">
              {errors.death_save_success}
            </span>
          )}
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="death_save_failure"
          >
            Fracaso en Salvación
          </label>
          <input
            type="number"
            id="death_save_failure"
            name="death_save_failure"
            value={combatStats.death_save_failure}
            onChange={handleChange}
          />
          {errors.death_save_failure && (
            <span className="font-condensed text-xs text-red-500">
              {errors.death_save_failure}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
});

export default EditCombat;
