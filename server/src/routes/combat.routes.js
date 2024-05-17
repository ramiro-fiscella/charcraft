const { Router } = require('express');
const {
  getCharacterCombatStats,
  setCharacterCombatStats,
  updateCharacterCombatStats,
} = require('../controllers/combat.controller');

const router = Router();

router.get('/:id/combat', getCharacterCombatStats);
router.post('/:id/combat', setCharacterCombatStats);
router.put('/:id/combat', updateCharacterCombatStats);

module.exports = router;
