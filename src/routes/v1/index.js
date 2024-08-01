const express = require('express');

const UserController = require('../../contorllers/user-controller');
const {AuthRequestValidators} = require('../../middlewares/index');

const router = express.Router();

router.post('/signup', 
    AuthRequestValidators.validateUserAuth,
    UserController.create

);
router.post('/signin', 
    AuthRequestValidators.validateUserAuth,
    UserController.signIn,

)

module.exports = router;