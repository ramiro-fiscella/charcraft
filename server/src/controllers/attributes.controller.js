const { getAttributes, setAttributes } = require("../models/attributes.model");

const getCharacterAttributes = async (req, res) => {
  const character_id = req.params.id;
  try {
    const attributes = await getAttributes(character_id);
    res.status(201).json(attributes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener los atributos" });
  }
};

const setCharacterAttributes = async (req, res) => {
  const character_id = req.params.id;
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } =
    req.body;

  try {
    const attributes = await setAttributes(character_id, {
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
    });
    res.status(201).json(attributes);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error al crear o actualizar los atributos" });
  }
};

module.exports = {
  setCharacterAttributes,
  getCharacterAttributes,
};
