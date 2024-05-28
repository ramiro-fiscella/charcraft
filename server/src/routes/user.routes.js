const { Router } = require('express');
const { createUser, getUserById } = require('../controllers/user.controller');

const router = Router();

router.post('/', createUser);
router.get('/:id', getUserById);

module.exports = router;
