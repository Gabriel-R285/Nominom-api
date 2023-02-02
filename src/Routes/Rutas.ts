const {loginController, registerController} = require('../Controllers/Users');
const {Router} = require('express');
const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);

module.exports = router;
