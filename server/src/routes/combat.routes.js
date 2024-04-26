const { Router } = require("express");
const {
  getCharacterCombatStats,
  setCharacterCombatStats,
} = require("../controllers/combat.controller");

const router = Router();

router.get("/:id", getCharacterCombatStats);
router.post("/:id", setCharacterCombatStats);

module.exports = router;
