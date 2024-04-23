const { Router } = require("express");
const { setCharacterSkills } = require("../controllers/skills.controller");

const router = Router();

router.post("/:id", setCharacterSkills);

module.exports = router;
