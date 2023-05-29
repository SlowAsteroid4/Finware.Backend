const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');

router
    .get("/", investmentController.getAllInvestors)
    .get("/invest/:userId", investmentController.getInvest)
    .post("/invest/:userId", investmentController.createInvest);

module.exports = router;