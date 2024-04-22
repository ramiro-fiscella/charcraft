const { Router } = require("express");
const {
  setCharacterAttributes,
  getCharacterAttributes,
} = require("../controllers/attributes.controller");

const router = Router();

router.get("/:id", getCharacterAttributes);
// Ruta para actualizar los atributos de un personaje específico
router.put("/:id", setCharacterAttributes);

module.exports = router;
