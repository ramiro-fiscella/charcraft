const { query } = require("../db");

const getCharacters = async () => {
  const result = await query(`
  SELECT *
  FROM characters
  `);

  return result.rows;
};

const getCharacterById = async (id) => {
  const queryString = `
    SELECT * FROM 
      characters AS c
    LEFT JOIN attributes AS a ON c.id = a.character_id
    LEFT JOIN skills AS s ON c.id = s.character_id
    LEFT JOIN personality AS p ON c.id = p.character_id
    LEFT JOIN combat_stats AS cs ON c.id = cs.character_id
    LEFT JOIN attack_stats AS at ON c.id = cs.character_id
    WHERE 
      c.id = $1;
  `;

  const result = await query(queryString, [id]);
  const character = result.rows[0];

  return character;
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
