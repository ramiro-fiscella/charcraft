const { query } = require("../db");

const setAttackStats = async (
  character_id,
  { weapon, atk_bonus, damage, damage_type, atk_range }
) => {
  const result = await query(
    `
    INSERT INTO attack_stats (
      character_id, 
      weapon, 
      atk_bonus, 
      damage, 
      damage_type, 
      atk_range
    ) VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,
    [character_id, weapon, atk_bonus, damage, damage_type, atk_range]
  );

  return result.rows[0];
};

module.exports = {
  setAttackStats,
};
