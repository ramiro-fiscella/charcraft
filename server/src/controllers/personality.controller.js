const {
  setPersonality,
  getPersonality,
} = require("../models/personality.model");

const setCharacterPersonality = async (req, res) => {
  const character_id = req.params.id;
  const {
    alignment,
    personality_traits,
    ideals,
    bonds,
    flaws,
    quote,
    features_and_traits,
    languages,
    other_proficiencies,
  } = req.body;

  try {
    const personality = await setPersonality(character_id, {
      alignment,
      personality_traits,
      ideals,
      bonds,
      flaws,
      quote,
      features_and_traits,
      languages,
      other_proficiencies,
    });
    res.status(201).json(personality);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error al crear o actualizar la personalidad" });
  }
};

const getCharacterPersonality = async (req, res) => {
  const character_id = req.params.id;
  try {
    const personality = await getPersonality(character_id);
    res.status(201).json(personality);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener la personalidad" });
  }
};

module.exports = {
  setCharacterPersonality,
  getCharacterPersonality,
};
