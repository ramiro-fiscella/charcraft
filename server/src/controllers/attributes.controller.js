const { setAttributes, getAttributes } = require("../models/attributes.model");

const getCharacterAttributes = async (req, res) => {
  const character_id = req.params.id;

  try {
    const attributes = await getAttributes(character_id);
    if (!attributes) {
      return res.status(404).json({
        message: "Atributos no encontrados para el personaje especificado",
      });
    }
    res.status(200).json(attributes);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener los atributos del personaje" });
  }
};

const setCharacterAttributes = async (req, res) => {
  const character_id = req.params.id;
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } =
    req.body;

  const attributes = {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  };

  try {
    const updatedAttributes = await setAttributes(character_id, attributes);
    res.status(200).json(updatedAttributes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar los atributos" });
  }
};

module.exports = {
  getCharacterAttributes,
  setCharacterAttributes,
};
