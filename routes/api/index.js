const path = require("path");
const userRoutes = require("./userRoutes");
const expenseRoutes = require("./expenseRoutes")
const balanceSheetRoutes = require('./balanceSheetRoutes')

module.exports = app => {
    app.use("/api/user",userRoutes);
    app.use("/api/expense",expenseRoutes) ;
    app.use("/api/balanceSheet",balanceSheetRoutes) ;
};