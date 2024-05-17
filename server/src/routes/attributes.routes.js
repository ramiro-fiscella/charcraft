const { Router } = require('express');
const {
  setCharacterAttributes,
  getCharacterAttributes,
  updateCharacterAttributes,
} = require('../controllers/attributes.controller');

const router = Router();

router.get('/:id/attributes', getCharacterAttributes);
router.post('/:id/attributes', setCharacterAttributes);
router.put('/:id/attributes', updateCharacterAttributes);

module.exports = router;
