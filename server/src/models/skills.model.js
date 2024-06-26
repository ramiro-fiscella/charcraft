const { query } = require('../db');

const getSkills = async (character_id) => {
  const queryString = `
    SELECT * FROM skills WHERE character_id = $1
  `;
  const result = await query(queryString, [character_id]);
  return result.rows[0];
};

const setSkills = async (
  character_id,
  {
    acrobatics,
    animal_handling,
    arcana,
    athletics,
    deception,
    history,
    insight,
    intimidation,
    investigation,
    medicine,
    nature,
    perception,
    performance,
    persuasion,
    religion,
    sleight_of_hand,
    stealth,
    survival,
  }
) => {
  const result = await query(
    `
    INSERT INTO skills
    (character_id,
    acrobatics,
    animal_handling,
    arcana,
    athletics,
    deception,
    history,
    insight,
    intimidation,
    investigation,
    medicine,
    nature,
    perception,
    performance,
    persuasion,
    religion,
    sleight_of_hand,
    stealth,
    survival)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING *;
  `,
    [
      character_id,
      acrobatics,
      animal_handling,
      arcana,
      athletics,
      deception,
      history,
      insight,
      intimidation,
      investigation,
      medicine,
      nature,
      perception,
      performance,
      persuasion,
      religion,
      sleight_of_hand,
      stealth,
      survival,
    ]
  );
  return result.rows[0];
};

const updateSkills = async (
  character_id,
  {
    acrobatics,
    animal_handling,
    arcana,
    athletics,
    deception,
    history,
    insight,
    intimidation,
    investigation,
    medicine,
    nature,
    perception,
    performance,
    persuasion,
    religion,
    sleight_of_hand,
    stealth,
    survival,
  }
) => {
  const queryString = `
    UPDATE skills
    SET
      acrobatics = $2,
      animal_handling = $3,
      arcana = $4,
      athletics = $5,
      deception = $6,
      history = $7,
      insight = $8,
      intimidation = $9,
      investigation = $10,
      medicine = $11,
      nature = $12,
      perception = $13,
      performance = $14,
      persuasion = $15,
      religion = $16,
      sleight_of_hand = $17,
      stealth = $18,
      survival = $19
    WHERE character_id = $1
    RETURNING *;
  `;
  const result = await query(queryString, [
    character_id,
    acrobatics,
    animal_handling,
    arcana,
    athletics,
    deception,
    history,
    insight,
    intimidation,
    investigation,
    medicine,
    nature,
    perception,
    performance,
    persuasion,
    religion,
    sleight_of_hand,
    stealth,
    survival,
  ]);
  return result.rows[0];
};

module.exports = {
  getSkills,
  setSkills,
  updateSkills,
};
