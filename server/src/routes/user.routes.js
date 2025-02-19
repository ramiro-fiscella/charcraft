const { Router } = require('express');
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUser,
} = require('../controllers/user.controller');

const router = Router();

// Rutas de usuario
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/all', getAllUsers);
router.get('/:uid', getUser);

module.exports = router;
