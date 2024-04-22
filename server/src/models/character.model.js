const { query } = require("../db");

const getCharacters = async () => {
  const result = await query("SELECT * FROM characters");
  return result.rows;
};

const getCharacterById = async (character_id) => {
  const result = await query(
    "SELECT * FROM characters WHERE character_id = $1",
    [character_id]
  );
  return result.rows[0];
};

const createCharacter = async ({
  character_name,
  character_race,
  character_class,
  character_level,
}) => {
  const result = await query(
    "INSERT INTO characters (character_name, character_race, character_class, character_level) VALUES ($1, $2, $3, $4) RETURNING *",
    [character_name, character_race, character_class, character_level]
  );
  return result.rows[0];
};

const updateCharacter = async (
  characterId,
  { character_name, character_race, character_class, character_level }
) => {
  const result = await query(
    "UPDATE characters SET character_name = $1, character_race = $2, character_class = $3, character_level = $4 WHERE character_id = $5 RETURNING *",
    [
      character_name,
      character_race,
      character_class,
      character_level,
      characterId,
    ]
  );
  return result.rows[0];
};

const deleteCharacter = async (characterId) => {
  const result = await query(
    "DELETE FROM characters WHERE character_id = $1 RETURNING *",
    [characterId]
  );
  return result.rows[0];
};
module.exports = {
  getCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
