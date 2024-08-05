const express = require("express");
const router = express.Router();

const expenseController = require("../../controller/expenseController");

// to create an expense 
router.post('/create', expenseController.createExpense);
// to retrieve expense of a certain user 
router.get('/total-expenses/:userId',expenseController.getExpense);
// to retrieve overall expenses 
router.get('/overallExpense',expenseController.getOverallExpense);
// to get balance sheet of an user 
router.get('/userBalanceSheet/:userId',expenseController.getUserBalanceSheet);
module.exports = router;