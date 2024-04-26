const { Router } = require("express");
const characterRoutes = require("./character.routes");
const attributesRoutes = require("./attributes.routes");
const skillsRoutes = require("./skills.routes");
const personalityRoutes = require("./personality.routes");
const combatRoutes = require("./combat.routes");
const attackRoutes = require("./attack.routes");

const router = Router();

router.use("/", characterRoutes);

router.use("/", attributesRoutes);
router.use("/", skillsRoutes);
router.use("/", personalityRoutes);
router.use("/", combatRoutes);
router.use("/", attackRoutes);

module.exports = router;
