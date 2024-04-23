const { query } = require("../db");

const getCharacters = async () => {
  const result = await query(`
    SELECT 
      c.id,
      c.char_name,
      c.race,
      c.char_class,
      c.level,
      c.created_at,
      c.updated_at,
      a.strength,
      a.dexterity,
      a.constitution,
      a.intelligence,
      a.wisdom,
      a.charisma,
      s.acrobatics,
      s.animal_handling,
      s.arcana,
      s.athletics,
      s.deception,
      s.history,
      s.insight,
      s.intimidation,
      s.investigation,
      s.medicine,
      s.nature,
      s.perception,
      s.performance,
      s.persuasion,
      s.religion,
      s.sleight_of_hand,
      s.stealth,
      s.survival
    FROM 
      characters AS c
    LEFT JOIN 
      attributes AS a ON c.id = a.character_id
    LEFT JOIN
      skills AS s ON c.id = s.character_id
  `);

  const formattedCharacters = result.rows.map((character) => ({
    id: character.id,
    char_name: character.char_name,
    race: character.race,
    char_class: character.char_class,
    level: character.level,
    created_at: character.created_at,
    updated_at: character.updated_at,
    attributes: {
      strength: character.strength,
      dexterity: character.dexterity,
      constitution: character.constitution,
      intelligence: character.intelligence,
      wisdom: character.wisdom,
      charisma: character.charisma,
    },
    skills: {
      acrobatics: character.acrobatics,
      animal_handling: character.animal_handling,
      arcana: character.arcana,
      athletics: character.athletics,
      deception: character.deception,
      history: character.history,
      insight: character.insight,
      intimidation: character.intimidation,
      investigation: character.investigation,
      medicine: character.medicine,
      nature: character.nature,
      perception: character.perception,
      performance: character.performance,
      persuasion: character.persuasion,
      religion: character.religion,
      sleight_of_hand: character.sleight_of_hand,
      stealth: character.stealth,
      survival: character.survival,
    },
  }));

  return formattedCharacters;
};

const getCharacterById = async (id) => {
  const queryString = `
    SELECT 
      c.id,
      c.char_name,
      c.race,
      c.char_class,
      c.level,
      c.created_at,
      c.updated_at,
      a.strength,
      a.dexterity,
      a.constitution,
      a.intelligence,
      a.wisdom,
      a.charisma
    FROM 
      characters AS c
    LEFT JOIN 
      attributes AS a ON c.id = a.character_id
    WHERE 
      c.id = $1;
  `;

  const result = await query(queryString, [id]);
  const character = result.rows[0];

  const formattedCharacter = {
    id: character.id,
    char_name: character.char_name,
    race: character.race,
    char_class: character.char_class,
    level: character.level,
    created_at: character.created_at,
    updated_at: character.updated_at,
    attributes: {
      strength: character.strength,
      dexterity: character.dexterity,
      constitution: character.constitution,
      intelligence: character.intelligence,
      wisdom: character.wisdom,
      charisma: character.charisma,
    },
  };

  return formattedCharacter;
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
