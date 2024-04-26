const { Router } = require("express");
const {
  getCharacterAttackStats,
  setCharacterAttackStats,
} = require("../controllers/attack.controller");

const router = Router();

router.get("/:id", getCharacterAttackStats);
router.post("/:id", setCharacterAttackStats);

module.exports = router;
