const { Router } = require("express");
const {
  setCharacterAttributes,
} = require("../controllers/attributes.controller");

const router = Router();

router.put("/:character_id/attributes", setCharacterAttributes);

module.exports = router;
