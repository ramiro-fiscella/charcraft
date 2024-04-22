const { query } = require("../db");

const getCharacters = async () => {
  const result = await query("SELECT * FROM characters");
  return result.rows;
};

const getCharacterById = async (id) => {
  const result = await query("SELECT * FROM characters WHERE id = $1", [id]);
  return result.rows;
};

const createCharacter = async ({ char_name, race, char_class, level }) => {
  const result = await query(
    "INSERT INTO characters (char_name, race, char_class, level) VALUES ($1, $2, $3, $4) RETURNING *",
    [char_name, race, char_class, level]
  );
  return result.rows[0];
};

const updateCharacter = async (id, { char_name, race, char_class, level }) => {
  const result = await query(
    "UPDATE characters SET char_name = $1, race = $2, char_class = $3, level = $4 WHERE id = $5 RETURNING *",
    [char_name, race, char_class, level, id]
  );
  return result.rows[0];
};

const deleteCharacter = async (id) => {
  const result = await query(
    "DELETE FROM characters WHERE id = $1 RETURNING *",
    [id]
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
