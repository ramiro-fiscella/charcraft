const { setAttributes } = require("../models/attributes.model");

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
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al crear o actualizar los atributos" });
  }
};

module.exports = {
  setCharacterAttributes,
};
