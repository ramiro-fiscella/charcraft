const PersonalityModel = require('../models/personality.model');

const getCharacterPersonality = async (req, res) => {
  const character_id = req.params.id;
  try {
    const personality = await PersonalityModel.getPersonality(character_id);

    if (!personality) {
      const defaultPersonality = {
        alignment: '',
        personality_traits: '',
        ideals: '',
        bonds: '',
        flaws: '',
        quote: '',
        features_and_traits: [],
        languages: [],
        other_proficiencies: [],
      };

      personality = await PersonalityModel.setPersonality(
        character_id,
        defaultPersonality
      );
    }

    res.status(200).json(personality);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener la personalidad' });
  }
};

const setCharacterPersonality = async (req, res) => {
  const character_id = req.params.id;
  const personalityData = req.body;

  try {
    const personality = await PersonalityModel.setPersonality(
      character_id,
      personalityData
    );
    res.status(201).json(personality);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: 'Error al crear o actualizar la personalidad' });
  }
};

const updatePersonality = async (req, res) => {
  const character_id = req.params.id;
  const personalityData = req.body;

  try {
    const updatedPersonality = await PersonalityModel.updatePersonality(
      character_id,
      personalityData
    );
    res.status(200).json(updatedPersonality);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al actualizar la personalidad' });
  }
};

module.exports = {
  getCharacterPersonality,
  setCharacterPersonality,
  updatePersonality,
};
