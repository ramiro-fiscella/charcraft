const { Router } = require('express');
const {
  getCharacterSkills,
  setCharacterSkills,
  updateCharacterSkills,
} = require('../controllers/skills.controller');

const router = Router();

router.get('/:id/skills', getCharacterSkills);
router.post('/:id/skills', setCharacterSkills);
router.put('/:id/skills', updateCharacterSkills);

module.exports = router;
