const express = require('express');
const router = express.Router();
const investmentController = require('../controllers/investmentController');


router
    .get("/", investmentController.getAllInvestors)
    .get("/:userId", investmentController.getOneInvestor)
    .post("/:userId", investmentController.createNewInvestor)
    .patch("/:userId", investmentController.updateOneInvestor)
    .delete("/:userId", investmentController.deleteOneInvestor);

module.exports = router;