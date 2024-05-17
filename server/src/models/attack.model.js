const { query } = require('../db');

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

const updateAttackStats = async (
  character_id,
  {
    weapon_1,
    atk_bonus_1,
    damage_1,
    damage_type_1,
    atk_range_1,
    weapon_2,
    atk_bonus_2,
    damage_2,
    damage_type_2,
    atk_range_2,
    weapon_3,
    atk_bonus_3,
    damage_3,
    damage_type_3,
    atk_range_3,
  }
) => {
  const result = await query(
    `
    UPDATE attack_stats SET
      weapon_1 = $1,
      atk_bonus_1 = $2,
      damage_1 = $3,
      damage_type_1 = $4,
      atk_range_1 = $5,
      weapon_2 = $6,
      atk_bonus_2 = $7,
      damage_2 = $8,
      damage_type_2 = $9,
      atk_range_2 = $10,
      weapon_3 = $11,
      atk_bonus_3 = $12,
      damage_3 = $13,
      damage_type_3 = $14,
      atk_range_3 = $15
    WHERE character_id = $16
    RETURNING *;
  `,
    [
      weapon_1,
      atk_bonus_1,
      damage_1,
      damage_type_1,
      atk_range_1,
      weapon_2,
      atk_bonus_2,
      damage_2,
      damage_type_2,
      atk_range_2,
      weapon_3,
      atk_bonus_3,
      damage_3,
      damage_type_3,
      atk_range_3,
      character_id,
    ]
  );

  return result.rows[0];
};

module.exports = {
  getAttackStats,
  setAttackStats,
  updateAttackStats,
};
