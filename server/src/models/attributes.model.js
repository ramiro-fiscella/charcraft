const { query } = require("../db");

const setAttributes = async (req, res) => {
  const { character_id } = req.params;
  const attributesData = req.body;
  console.log(character_id, attributesData);
  try {
    const updatedAttributes = await setAttributes(character_id, attributesData);
    res.status(201).json(updatedAttributes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error al actualizar los atributos" });
  }
  const result = await query(queryString, values);
  return result.rows[0];
};

module.exports = {
  setAttributes,
};
