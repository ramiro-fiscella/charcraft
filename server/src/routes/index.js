const { Router } = require("express");
const characterRoutes = require("./character.routes");
const attributesRoutes = require("./attributes.routes");
const skillsRoutes = require("./skills.routes");
const personalityRoutes = require("./personality.routes");
const combatRoutes = require("./combat.routes");
const attackRoutes = require("./attack.routes");

const router = Router();

router.use("/characters", characterRoutes);
router.use("/attributes", attributesRoutes);
router.use("/skills", skillsRoutes);
router.use("/personality", personalityRoutes);
router.use("/combat_stats", combatRoutes);
router.use("/attack_stats", attackRoutes);

module.exports = router;
