const { Router } = require("express");
const {
  setCharacterPersonality,
  getCharacterPersonality,
} = require("../controllers/personality.controller");

const router = Router();

router.post("/:id", setCharacterPersonality);
router.get("/:id", getCharacterPersonality);

module.exports = router;
