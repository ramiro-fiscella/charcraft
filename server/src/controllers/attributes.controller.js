const { setAttributes } = require("../models/attributes.model");

const setCharacterAttributes = async (req, res) => {
  const characterId = req.params.character_id;
  const attributes = req.body;
  try {
    updatedAttributes = await setAttributes(characterId, attributes);
    res.status(201).json(updatedAttributes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al actualizar los atributos" });
  }
};

module.exports = {
  setCharacterAttributes,
};
