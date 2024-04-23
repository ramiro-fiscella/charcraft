const { query } = require("../db");

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

  try {
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
  } catch (err) {
    console.error("Error al crear o actualizar los atributos:", err);
    throw err;
  }
};

module.exports = {
  setAttributes,
};
