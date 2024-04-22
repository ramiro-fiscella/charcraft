const { Router } = require("express");
const {
  setCharacterAttributes,
} = require("../controllers/attributes.controller");

const router = Router();

router.post("/:id", setCharacterAttributes);

module.exports = router;
