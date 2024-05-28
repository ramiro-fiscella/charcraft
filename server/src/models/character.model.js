const { query } = require('../db');

const getCharacters = async () => {
  const result = await query(`SELECT characters.*, personality.quote
  FROM characters
  LEFT JOIN personality ON characters.id = personality.character_id;
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
    LEFT JOIN attack_stats AS at ON c.id = at.character_id
    WHERE 
      c.id = $1;
  `;

  const result = await query(queryString, [id]);
  const character = result.rows[0];
  // console.log(character);
  return character;
};

const createCharacter = async ({
  char_name,
  race,
  char_class,
  level,
  avatar_url,
  user_id,
}) => {
  const result = await query(
    'INSERT INTO characters (char_name, race, char_class, level, avatar_url, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [char_name, race, char_class, level, avatar_url, user_id]
  );
  return result.rows[0];
};

const updateCharacter = async (
  id,
  { char_name, race, char_class, level, avatar_url, user_id }
) => {
  const result = await query(
    'UPDATE characters SET char_name = $1, race = $2, char_class = $3, level = $4, avatar_url = $5, user_id = $6 WHERE id = $7 RETURNING *',
    [char_name, race, char_class, level, avatar_url, user_id, id]
  );
  return result.rows[0];
};

const deleteCharacter = async (id) => {
  const result = await query(
    'DELETE FROM characters WHERE id = $1 RETURNING *',
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
