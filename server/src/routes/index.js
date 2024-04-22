const { Router } = require("express");
const characterRoutes = require("./character.routes");

const router = Router();

router.use("/characters", characterRoutes);

module.exports = router;
