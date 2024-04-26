const { query } = require("../db");

const getAttackStats = async (character_id) => {
  const queryString = `
    SELECT * FROM attack_stats WHERE character_id = $1
  `;
  const result = await query(queryString, [character_id]);
  return result.rows[0];
};

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
  getAttackStats,
  setAttackStats,
};
