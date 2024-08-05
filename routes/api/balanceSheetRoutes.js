const express = require("express");
const router = express.Router();
const balanceSheetController = require("../../controller/balanceSheetController");


router.get('/getBalanceSheet/:userId', balanceSheetController.getBalanceSheet);

module.exports = router;