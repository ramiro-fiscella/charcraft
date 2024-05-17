const { Router } = require('express');
const {
  getCharacterAttackStats,
  setCharacterAttackStats,
  updateAttackStats,
} = require('../controllers/attack.controller');

const router = Router();

router.get('/:id/attack', getCharacterAttackStats);
router.post('/:id/attack', setCharacterAttackStats);
router.put('/:id/attack', updateAttackStats);

module.exports = router;
