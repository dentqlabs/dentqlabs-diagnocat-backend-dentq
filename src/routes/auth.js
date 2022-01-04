const authController = require('../controllers/authController.js');
const passport = require("passport");
const express = require('express');
const { decryptPassword } = require('../middleware/decrypt-password.js');
const router = express.Router();

router.post('/login',
    decryptPassword,
    passport.authenticate('local', { session: false }),
    authController.login);

module.exports = router;
