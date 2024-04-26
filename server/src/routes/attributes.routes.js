const { Router } = require("express");
const {
  setCharacterAttributes,
  getCharacterAttributes,
} = require("../controllers/attributes.controller");

const router = Router();

router.get("/:id/attributes", getCharacterAttributes);
router.post("/:id/attributes", setCharacterAttributes);

module.exports = router;
