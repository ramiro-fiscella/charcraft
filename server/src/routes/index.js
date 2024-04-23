const { Router } = require("express");
const characterRoutes = require("./character.routes");
const attributesRoutes = require("./attributes.routes");
const skillsRoutes = require("./skills.routes");

const router = Router();

router.use("/characters", characterRoutes);
router.use("/attributes", attributesRoutes);
router.use("/skills", skillsRoutes);

module.exports = router;
