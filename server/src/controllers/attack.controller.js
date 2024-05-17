const AttackModel = require('../models/attack.model');

const getCharacterAttackStats = async (req, res) => {
  const character_id = req.params.id;
  try {
    const attackStats = await AttackModel.getAttackStats(character_id);
    res.status(201).json(attackStats);
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
