const { getCombatStats, setCombatStats } = require("../models/combat.model");

const getCharacterCombatStats = async (req, res) => {
  const character_id = req.params.id;
  try {
    const combatStats = await getCombatStats(character_id);
    res.status(201).json(combatStats);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener estadísticas de combate" });
  }
};

const setCharacterCombatStats = async (req, res) => {
  const character_id = req.params.id;
  const combatStatsData = req.body;

  try {
    const newCombatStats = await setCombatStats(character_id, combatStatsData);
    res.status(201).json(newCombatStats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear estadísticas de combate" });
  }
};

module.exports = {
  getCharacterCombatStats,
  setCharacterCombatStats,
};
