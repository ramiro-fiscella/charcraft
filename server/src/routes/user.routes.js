const { Router } = require('express');
const {
  getUsers,
  getUserById,
  createUser,
} = require('../controllers/user.controller');

const router = Router();

router.get('/all', getUsers);
router.post('/', createUser);
router.get('/:id', getUserById);

module.exports = router;
