const { Router } = require("express");
const { setCharacterAttackStats } = require("../controllers/attack.controller");

const router = Router();

router.post("/:id", setCharacterAttackStats);

module.exports = router;
