const AttackModel = require('../models/attack.model');

const getCharacterAttackStats = async (req, res) => {
  const character_id = req.params.id;
  try {
    let attackStats = await AttackModel.getAttackStats(character_id);

    // Si no existen estadísticas de ataque, crear una entrada nueva con valores predeterminados
    if (!attackStats) {
      const defaultAttackStats = {
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
      };

      attackStats = await AttackModel.setAttackStats(
        character_id,
        defaultAttackStats
      );
    }

    res.status(200).json(attackStats);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: 'Error al obtener estadísticas de ataque' });
  }
};

const setCharacterAttackStats = async (req, res) => {
  const character_id = req.params.id;
  const attackStatsData = req.body;

  try {
    const newAttackStats = await AttackModel.setAttackStats(
      character_id,
      attackStatsData
    );
    res.status(201).json(newAttackStats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear esdísticas de ataque' });
  }
};

const updateAttackStats = async (req, res) => {
  const character_id = req.params.id;
  const attackStatsData = req.body;
  try {
    const updatedAttackStats = await AttackModel.updateAttackStats(
      character_id,
      attackStatsData
    );
    res.status(201).json(updatedAttackStats);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: 'Error al actualizar estadísticas de ataque' });
  }
};

module.exports = {
  getCharacterAttackStats,
  setCharacterAttackStats,
  updateAttackStats,
};
