const express = require('express');
const { signupController, loginController, homeController} = require('../controllers/singup.con'); // Corrected path

const router = express.Router();

router.post('/signup', signupController);
router.post('/login', loginController);
router.get('/',homeController);


module.exports = router; 
