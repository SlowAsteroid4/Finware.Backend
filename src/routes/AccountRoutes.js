const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router
    .post("/", accountController.getCredentials)
    .post("/signIn", accountController.createUser);

module.exports = router;