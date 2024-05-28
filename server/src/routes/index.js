const { Router } = require('express');
const characterRoutes = require('./character.routes');
const attributesRoutes = require('./attributes.routes');
const skillsRoutes = require('./skills.routes');
const personalityRoutes = require('./personality.routes');
const combatRoutes = require('./combat.routes');
const attackRoutes = require('./attack.routes');
const userRoutes = require('./user.routes');

const router = Router();

router.use('/characters', characterRoutes);

router.use('/characters', attributesRoutes);
router.use('/characters', skillsRoutes);
router.use('/characters', personalityRoutes);
router.use('/characters', combatRoutes);
router.use('/characters', attackRoutes);
router.use('/user', userRoutes);

module.exports = router;
