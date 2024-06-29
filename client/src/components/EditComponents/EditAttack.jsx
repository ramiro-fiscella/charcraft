import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditAttack = forwardRef((params, ref) => {
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
        const response = await axios.get(`/characters/${id}/attack`);
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
      await axios.put(`/characters/${id}/attack`, attackStats);
      console.log('Attack stats saved:', attackStats);
    } catch (error) {
      console.error('Error saving attackStats:', error);
    }
  };

  useImperativeHandle(ref, () => ({
    handleSave,
  }));

  return (
    <div className="p-4 border border-neutral-800 rounded-xl">
      <h6 className="mb-6 text-lg font-normal text-center">
        Estadísticas de ataque
      </h6>
      <label>
        Arma 1:
        <input
          list="weapons"
          type="text"
          name="weapon_1"
          value={attackStats.weapon_1}
          onChange={handleChange}
        />
      </label>
      <label>
        Bono de Ataque 1:
        <input
          type="number"
          name="atk_bonus_1"
          value={attackStats.atk_bonus_1}
          onChange={handleChange}
        />
      </label>
      <label>
        Daño 1:
        <input
          type="text"
          name="damage_1"
          value={attackStats.damage_1}
          onChange={handleChange}
        />
      </label>
      <label>
        Tipo de Daño 1:
        <input
          list="damage_type"
          name="damage_type_1"
          value={attackStats.damage_type_1}
          onChange={handleChange}
        />
      </label>
      <datalist id="damage_type">
        <option value="Cortante" />
        <option value="Contundente" />
        <option value="Perforante" />
        <option value="Fuego" />
        <option value="Hielo" />
        <option value="Eléctrico" />
        <option value="Ácido" />
      </datalist>
      <label>
        Rango de Ataque 1:
        <input
          list="atk_range"
          name="atk_range_1"
          value={attackStats.atk_range_1}
          onChange={handleChange}
        />
      </label>
      <datalist id="atk_range">
        <option value="Cuerpo a cuerpo" />
        <option value="A distancia" />
      </datalist>
      <hr className="my-4 border-neutral-800" />
      <label>
        Arma 2:
        <input
          list="weapons"
          type="text"
          name="weapon_2"
          value={attackStats.weapon_2}
          onChange={handleChange}
        />
      </label>
      <label>
        Bono de Ataque 2:
        <input
          type="number"
          name="atk_bonus_2"
          value={attackStats.atk_bonus_2}
          onChange={handleChange}
        />
      </label>
      <label>
        Daño 2:
        <input
          type="text"
          name="damage_2"
          value={attackStats.damage_2}
          onChange={handleChange}
        />
      </label>
      <label>
        Tipo de Daño 2:
        <input
          list="damage_type"
          name="damage_type_2"
          value={attackStats.damage_type_2}
          onChange={handleChange}
        />
      </label>
      <label>
        Rango de Ataque 2:
        <input
          list="atk_range"
          name="atk_range_2"
          value={attackStats.atk_range_2}
          onChange={handleChange}
        />
      </label>
      <hr className="my-4 border-neutral-800" />
      <label>
        Arma 3:
        <input
          list="weapons"
          type="text"
          name="weapon_3"
          value={attackStats.weapon_3}
          onChange={handleChange}
        />
      </label>
      <label>
        Bono de Ataque 3:
        <input
          type="number"
          name="atk_bonus_3"
          value={attackStats.atk_bonus_3}
          onChange={handleChange}
        />
      </label>
      <label>
        Daño 3:
        <input
          type="text"
          name="damage_3"
          value={attackStats.damage_3}
          onChange={handleChange}
        />
      </label>
      <label>
        Tipo de Daño 3:
        <input
          list="damage_type"
          name="damage_type_3"
          value={attackStats.damage_type_3}
          onChange={handleChange}
        />
      </label>
      <label>
        Rango de Ataque 3:
        <input
          list="atk_range"
          name="atk_range_3"
          value={attackStats.atk_range_3}
          onChange={handleChange}
        />
      </label>
      <datalist id="weapons">
        <option value="Espada corta" />
        <option value="Espada larga" />
        <option value="Hacha de batalla" />
        <option value="Arco largo" />
        <option value="Arco corto" />
        <option value="Daga" />
        <option value="Maza" />
        <option value="Lanza" />
        <option value="Martillo de guerra" />
        <option value="Ballesta ligera" />
        <option value="Ballesta pesada" />
        <option value="Jabalina" />
        <option value="Mandoble" />
        <option value="Estoque" />
      </datalist>
    </div>
  );
});

export default EditAttack;
