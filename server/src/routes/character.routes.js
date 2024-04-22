const { Router } = require("express");
const {
  getCharacters,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require("../controllers/character.controller");

const router = Router();

router.get("/", getCharacters);
router.get("/:character_id", getCharacter);
router.post("/", createCharacter);
router.put("/:character_id", updateCharacter);
router.delete("/:character_id", deleteCharacter);

module.exports = router;
