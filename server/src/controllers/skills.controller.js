const { setSkills } = require("../models/skills.model");

const setCharacterSkills = async (req, res) => {
  const character_id = req.params.id;
  const {
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
  } = req.body;

  try {
    const skills = await setSkills(character_id, {
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
    });
    res.status(201).json(skills);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error al crear o actualizar las habilidades" });
  }
};

module.exports = {
  setCharacterSkills,
};
