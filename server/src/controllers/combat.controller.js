const { setCombatStats } = require("../models/combat.model");

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
  setCharacterCombatStats,
};
