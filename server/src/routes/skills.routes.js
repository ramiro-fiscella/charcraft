const { Router } = require("express");
const {
  getCharacterSkills,
  setCharacterSkills,
} = require("../controllers/skills.controller");

const router = Router();

router.get("/:id", getCharacterSkills);
router.post("/:id", setCharacterSkills);

module.exports = router;
