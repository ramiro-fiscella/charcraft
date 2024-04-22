const { query } = require("../db");

const getAttributes = async (character_id) => {
  const queryString = `
    SELECT * FROM attributes JOIN characters ON attributes.character_id = characters.id;
  `;
  const result = await query(queryString, [character_id]);
  return result.rows[0];
};

const createAttributesTable = async () => {
  const queryString = `
    CREATE TABLE IF NOT EXISTS attributes (
      id SERIAL PRIMARY KEY,
      character_id INT REFERENCES characters(id) ON DELETE CASCADE,
      strength INT,
      dexterity INT,
      constitution INT,
      intelligence INT,
      wisdom INT,
      charisma INT,
      UNIQUE (id)
    );
  `;

  try {
    await query(queryString);
  } catch (error) {
    console.error("Error al crear la tabla attributes:", error);
    throw error;
  }
};

const setAttributes = async (
  character_id,
  { strength, dexterity, constitution, intelligence, wisdom, charisma }
) => {
  await createAttributesTable();

  const result = await query(
    "INSERT INTO attributes (character_id, strength, dexterity, constitution, intelligence, wisdom, charisma) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (character_id) DO UPDATE SET strength = $2, dexterity = $3, constitution = $4, intelligence = $5, wisdom = $6, charisma = $7 RETURNING *",
    [
      character_id,
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
    ]
  );

  return result.rows[0];
};

module.exports = {
  setAttributes,
  getAttributes,
};
