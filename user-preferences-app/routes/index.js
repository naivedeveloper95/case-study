const express = require('express');
const authController = require('../controller/authController');
const userController = require('../controller/userController');

const router = express.Router();

// Sign-in route
router.post('/signin', authController.signIn);
// Signup route
router.post('/signup', authController.signup);
// Update color preference route
router.patch('/preferences/:username', userController.updateColorPreference);

module.exports = router;
