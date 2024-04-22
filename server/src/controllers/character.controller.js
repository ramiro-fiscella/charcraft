const { query } = require("../db");

const getCharacters = async (req, res) => {
  try {
    const result = await query("SELECT * FROM characters");
    res.status(201).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener los personajes" });
  }
};

const getCharacter = async (req, res) => {
  const { character_id } = req.params;
  try {
    const result = await query(
      "SELECT * FROM characters WHERE character_id = $1",
      [character_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener el personaje" });
  }
};

const createCharacter = async (req, res) => {
  const { character_name, character_race, character_class, character_level } =
    req.body;

  try {
    const result = await query(
      "INSERT INTO characters (character_name, character_race, character_class, character_level) VALUES ($1, $2, $3, $4) RETURNING *",
      [character_name, character_race, character_class, character_level]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear el personaje" });
  }
};

const updateCharacter = async (req, res) => {
  const { character_id } = req.params;
  const { character_name, character_race, character_class, character_level } =
    req.body;
  try {
    const result = await query(
      "UPDATE characters SET character_name = $1, character_race = $2, character_class = $3, character_level = $4 WHERE character_id = $5 RETURNING *",
      [
        character_name,
        character_race,
        character_class,
        character_level,
        character_id,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al actualizar el personaje" });
  }
};

const deleteCharacter = async (req, res) => {
  const { character_id } = req.params;
  try {
    const result = await query(
      "DELETE FROM characters WHERE character_id = $1",
      [character_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al borrar el personaje" });
  }
};

module.exports = {
  createCharacter,
  getCharacters,
  getCharacter,
  updateCharacter,
  deleteCharacter,
};
