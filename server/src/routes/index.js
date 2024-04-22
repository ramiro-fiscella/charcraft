const { Router } = require("express");
const characterRoutes = require("./character.routes");
const attributesRoutes = require("./attributes.routes");

const router = Router();

router.use("/characters", characterRoutes);
router.use("/attributes/:id", attributesRoutes);
module.exports = router;
