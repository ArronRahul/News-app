const express = require('express');
const { signupController, loginController } = require('./singup.con'); // Corrected path

const router = express.Router();

router.post('/signup', signupController);
router.post('/login', loginController);

module.exports = router; 
