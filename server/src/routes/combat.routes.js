const { Router } = require("express");
const { setCharacterCombatStats } = require("../controllers/combat.controller");

const router = Router();

router.post("/:id", setCharacterCombatStats);

module.exports = router;
