import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditAttack = () => {
  const { id } = useParams();
  const [attackStats, setAttackStats] = useState({
    weapon_1: '',
    atk_bonus_1: 0,
    damage_1: '0',
    damage_type_1: '',
    atk_range_1: '',
    weapon_2: '',
    atk_bonus_2: 0,
    damage_2: '0',
    damage_type_2: '',
    atk_range_2: '',
    weapon_3: '',
    atk_bonus_3: 0,
    damage_3: '0',
    damage_type_3: '',
    atk_range_3: '',
  });

  useEffect(() => {
    const fetchAttackStats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/characters/${id}/attack`
        );
        setAttackStats(response.data);
      } catch (err) {
        console.error('Error fetching attack stats:', err);
      }
    };

    fetchAttackStats();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttackStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/characters/${id}/attack`,
        attackStats
      );
      console.log('Attack stats saved:', attackStats);
    } catch (error) {
      console.error('Error saving attackStats:', error);
    }
  };

  return (
    <div>
      <label>
        Weapon 1:
        <input
          type="text"
          name="weapon_1"
          value={attackStats.weapon_1}
          onChange={handleChange}
        />
      </label>
      <label>
        Attack Bonus 1:
        <input
          type="text"
          name="atk_bonus_1"
          value={attackStats.atk_bonus_1}
          onChange={handleChange}
        />
      </label>
      <label>
        Damage 1:
        <input
          type="text"
          name="damage_1"
          value={attackStats.damage_1}
          onChange={handleChange}
        />
      </label>
      <label>
        Damage Type 1:
        <input
          type="text"
          name="damage_type_1"
          value={attackStats.damage_type_1}
          onChange={handleChange}
        />
      </label>
      <label>
        Attack Range 1:
        <input
          type="text"
          name="atk_range_1"
          value={attackStats.atk_range_1}
          onChange={handleChange}
        />
      </label>
      <label>
        Weapon 2:
        <input
          type="text"
          name="weapon_2"
          value={attackStats.weapon_2}
          onChange={handleChange}
        />
      </label>
      <label>
        Attack Bonus 2:
        <input
          type="text"
          name="atk_bonus_2"
          value={attackStats.atk_bonus_2}
          onChange={handleChange}
        />
      </label>
      <label>
        Damage 2:
        <input
          type="text"
          name="damage_2"
          value={attackStats.damage_2}
          onChange={handleChange}
        />
      </label>
      <label>
        Damage Type 2:
        <input
          type="text"
          name="damage_type_2"
          value={attackStats.damage_type_2}
          onChange={handleChange}
        />
      </label>
      <label>
        Attack Range 2:
        <input
          type="text"
          name="atk_range_2"
          value={attackStats.atk_range_2}
          onChange={handleChange}
        />
      </label>
      <label>
        Weapon 3:
        <input
          type="text"
          name="weapon_3"
          value={attackStats.weapon_3}
          onChange={handleChange}
        />
      </label>
      <label>
        Attack Bonus 3:
        <input
          type="text"
          name="atk_bonus_3"
          value={attackStats.atk_bonus_3}
          onChange={handleChange}
        />
      </label>
      <label>
        Damage 3:
        <input
          type="text"
          name="damage_3"
          value={attackStats.damage_3}
          onChange={handleChange}
        />
      </label>
      <label>
        Damage Type 3:
        <input
          type="text"
          name="damage_type_3"
          value={attackStats.damage_type_3}
          onChange={handleChange}
        />
      </label>
      <label>
        Attack Range 3:
        <input
          type="text"
          name="atk_range_3"
          value={attackStats.atk_range_3}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditAttack;