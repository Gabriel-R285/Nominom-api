var _a = require('../Controllers/Users'), loginController = _a.loginController, registerController = _a.registerController;
var Router = require('express').Router;
var router = Router();
router.post('/register', registerController);
router.post('/login', loginController);
module.exports = router;
