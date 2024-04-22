const { Router } = require("express");
const characterRoutes = require("./character.routes");
const attributesRoutes = require("./attributes.routes");

const router = Router();

router.use("/characters", characterRoutes);
router.use("/attributes", attributesRoutes);
router.use("/characters/:id/attributes", attributesRoutes);
module.exports = router;
