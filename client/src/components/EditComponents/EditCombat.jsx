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

  useEffect(() => {
    const fetchCombatStats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/characters/${id}/combat`
        );
        setCombatStats(response.data);
      } catch (err) {
        console.error('Error fetching character:', err);
      }
    };
    fetchCombatStats();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCombatStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/characters/${id}/combat`,
        combatStats
      );
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
      <h2 className="text-xl text-center mb-4">Estadísticas de Combate</h2>
      <ul className="flex flex-row justify-between gap-4">
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="max_hp"
          >
            Max HP
          </label>
          <input
            className="h-12 full text-2xl px-2"
            type="number"
            id="max_hp"
            name="max_hp"
            value={combatStats.max_hp}
            onChange={handleChange}
          />
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="current_hp"
          >
            Current HP
          </label>
          <input
            className="h-12 full text-2xl px-2"
            type="number"
            id="current_hp"
            name="current_hp"
            value={combatStats.current_hp}
            onChange={handleChange}
          />
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="temp_hp"
          >
            Temp HP
          </label>
          <input
            className="h-12 full text-2xl px-2"
            type="number"
            id="temp_hp"
            name="temp_hp"
            value={combatStats.temp_hp}
            onChange={handleChange}
          />
        </li>
      </ul>

      <ul className="flex flex-row justify-between gap-4 mt-4">
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="max_hp"
          >
            Armor Class
          </label>
          <input
            className="h-12 full text-2xl px-2"
            type="number"
            id="armor_class"
            name="armor_class"
            value={combatStats.armor_class}
            onChange={handleChange}
          />
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="current_hp"
          >
            Initiative
          </label>
          <input
            className="h-12 full text-2xl px-2"
            type="number"
            id="initiative"
            name="initiative"
            value={combatStats.initiative}
            onChange={handleChange}
          />
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="temp_hp"
          >
            Speed
          </label>
          <input
            className="h-12 full text-2xl px-2"
            type="number"
            id="speed"
            name="speed"
            value={combatStats.speed}
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
            Hit Dice:
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
            htmlFor="death_save_failure"
          >
            Total Hit Dice:
          </label>
          <input
            type="text"
            id="total_hit_dice"
            name="total_hit_dice"
            value={combatStats.total_hit_dice}
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
            Death Save Success:
          </label>
          <input
            type="number"
            id="death_save_success"
            name="death_save_success"
            value={combatStats.death_save_success}
            onChange={handleChange}
          />
        </li>
        <li>
          <label
            className="font-condensed text-base mb-1 flex justify-center items-center"
            htmlFor="death_save_failure"
          >
            Death Save Failure:
          </label>
          <input
            type="number"
            id="death_save_failure"
            name="death_save_failure"
            value={combatStats.death_save_failure}
            onChange={handleChange}
          />
        </li>
      </ul>
    </div>
  );
});

export default EditCombat;
