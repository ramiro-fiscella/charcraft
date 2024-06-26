const { query } = require('../db');

const getAttributes = async (character_id) => {
  const queryString = `
    SELECT * FROM attributes WHERE character_id = $1
  `;
  const result = await query(queryString, [character_id]);
  return result.rows[0];
};

const setAttributes = async (
  character_id,
  { strength, dexterity, constitution, intelligence, wisdom, charisma }
) => {
  const queryString = `
    INSERT INTO attributes (
      character_id, 
      strength, 
      dexterity, 
      constitution, 
      intelligence, 
      wisdom, 
      charisma
    ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (character_id)
    DO UPDATE SET 
      strength = $2,
      dexterity = $3,
      constitution = $4,
      intelligence = $5,
      wisdom = $6,
      charisma = $7
    RETURNING *;
  `;

  const result = await query(queryString, [
    character_id,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  ]);

  return result.rows[0];
};

const updateAttributes = async (
  character_id,
  { strength, dexterity, constitution, intelligence, wisdom, charisma }
) => {
  const queryString = `
    UPDATE attributes
    SET
      strength = $1,
      dexterity = $2,
      constitution = $3,
      intelligence = $4,
      wisdom = $5,
      charisma = $6
    WHERE character_id = $7
    RETURNING *;
  `;

  const result = await query(queryString, [
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    character_id,
  ]);

  return result.rows[0];
};

module.exports = {
  setAttributes,
  getAttributes,
  updateAttributes,
};
