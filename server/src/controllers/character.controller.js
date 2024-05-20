const CharacterModel = require('../models/character.model');

const getCharacters = async (req, res) => {
  try {
    const characters = await CharacterModel.getCharacters();
    res.status(201).json(characters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los personajes' });
  }
};

const getCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await CharacterModel.getCharacterById(id);
    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }
    res.status(200).json(character);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener el personaje' });
  }
};

module.exports = {
  getCharacter,
  // otros controladores...
};

const createCharacter = async (req, res) => {
  const characterData = req.body;

  try {
    const newCharacter = await CharacterModel.createCharacter(characterData);
    res.status(201).json(newCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear el personaje' });
  }
};

const updateCharacter = async (req, res) => {
  const { id } = req.params;
  const characterData = req.body;
  try {
    const updatedCharacter = await CharacterModel.updateCharacter(
      id,
      characterData
    );
    res.status(201).json(updatedCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al actualizar el personaje' });
  }
};

const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCharacter = await CharacterModel.deleteCharacter(id);
    res.status(200).json(deletedCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al borrar el personaje' });
  }
};

module.exports = {
  createCharacter,
  getCharacters,
  getCharacter,
  updateCharacter,
  deleteCharacter,
};
