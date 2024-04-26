const { query } = require("../db");

const getCombatStats = async (character_id) => {
  const queryString = `
    SELECT * FROM combat_stats WHERE character_id = $1
  `;
  const result = await query(queryString, [character_id]);
  return result.rows[0];
};

const setCombatStats = async (
  character_id,
  {
    max_hp,
    current_hp,
    temp_hp,
    armor_class,
    initiative,
    speed,
    hit_dice,
    total_hit_dice,
    death_save_success,
    death_save_failure,
  }
) => {
  const result = await query(
    `
    INSERT INTO combat_stats (
      character_id, 
      max_hp,
      current_hp,
      temp_hp,
      armor_class,
      initiative,
      speed,
      hit_dice,
      total_hit_dice,
      death_save_success,
      death_save_failure
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;
  `,
    [
      character_id,
      max_hp,
      current_hp,
      temp_hp,
      armor_class,
      initiative,
      speed,
      hit_dice,
      total_hit_dice,
      death_save_success,
      death_save_failure,
    ]
  );

  return result.rows[0];
};

module.exports = {
  getCombatStats,
  setCombatStats,
};
