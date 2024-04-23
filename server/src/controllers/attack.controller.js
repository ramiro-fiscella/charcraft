const { setAttackStats } = require("../models/attack.model");

const setCharacterAttackStats = async (req, res) => {
  const character_id = req.params.id;
  const attackStatsData = req.body;

  try {
    const newAttackStats = await setAttackStats(character_id, attackStatsData);
    res.status(201).json(newAttackStats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear esdísticas de ataque" });
  }
};

module.exports = { setCharacterAttackStats };
