const { query } = require("../db");

const getPersonality = async (character_id) => {
  const queryString = `
    SELECT * FROM personality WHERE character_id = $1
  `;
  try {
    const result = await query(queryString, [character_id]);
    return result.rows[0];
  } catch (err) {
    console.error(err);
  }
};

const setPersonality = async (
  character_id,
  {
    alignment,
    personality_traits,
    ideals,
    bonds,
    flaws,
    quote,
    features_and_traits,
    languages,
    other_proficiencies,
  }
) => {
  const queryString = `
    INSERT INTO personality (
      character_id,
      alignment,
      personality_traits,
      ideals,
      bonds,
      flaws,
      quote,
      features_and_traits,
      languages,
      other_proficiencies
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    ON CONFLICT (character_id)
    DO UPDATE SET
      alignment = $2,
      personality_traits = $3,
      ideals = $4,
      bonds = $5,
      flaws = $6,
      quote = $7,
      features_and_traits = $8,
      languages = $9,
      other_proficiencies = $10
    RETURNING *;
  `;
  try {
    const result = await query(queryString, [
      character_id,
      alignment,
      personality_traits,
      ideals,
      bonds,
      flaws,
      quote,
      features_and_traits,
      languages,
      other_proficiencies,
    ]);
    return result.rows[0];
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  setPersonality,
  getPersonality,
};
