const { Router } = require('express');
const {
  setCharacterPersonality,
  getCharacterPersonality,
  updatePersonality,
} = require('../controllers/personality.controller');

const router = Router();

router.post('/:id/personality', setCharacterPersonality);
router.get('/:id/personality', getCharacterPersonality);
router.put('/:id/personality', updatePersonality);

module.exports = router;
