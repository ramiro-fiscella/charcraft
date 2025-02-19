const { Router } = require('express');
const {
  getCharacters,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require('../controllers/character.controller');

const auth = require('../middlewares/auth.js');

const router = Router();

router.get('/all', getCharacters);
router.get('/:id', getCharacter);
router.post('/', auth, createCharacter); // Solo usuarios autenticados pueden crear
router.put('/:id', auth, updateCharacter); // Solo el dueño puede editar
router.delete('/:id', auth, deleteCharacter); // Solo el dueño puede borrar

module.exports = router;
