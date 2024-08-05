const Expense = require('../models/expense');
const expenseServices = require("../services/expenseServices");
const mongoose = require('mongoose');

exports.createExpense = async (req,res,next) =>{
    try {

        
        const { description, userId , amount,  totalAmount , splitType,  participants } = req.body;
        let len = participants.length ;
        let dataTosave = [] ;
        let totalPercentage = 0 ;
        for(let i = 0 ; i < len ; i++)
        { 
            let data = {}   ;  
            data.description = description ;
            data.userId = participants[i].userId;
            if (splitType == 'exact') {
                data.amount = participants[i].amount; 
            }
            else if (splitType == 'equal') {
                data.amount = totalAmount / len;
            }
            else  {
                totalPercentage += participants[i].percentage ;
                if(totalPercentage != 100) 
                    return res.status(400).send('Percentages are not correct There sum must be 100');
                data.amount = totalAmount * participants[i].percentage * 0.01;
            }
        
            dataTosave.push(data);
        }
    
        console.log("This data have to be saved" , dataTosave);
        

 
        let response = await expenseServices.createExpense(dataTosave);
        console.log("response", response);

        if (response) {
            res.status(200).json({ status: 200, data: response });
        }
        
    }
    catch(err){
        let code = err.code ? err.code : 400;
        res.status(code).json({ code: code, message: err.message }); 
    }
    
}

exports.getExpense =  async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await Expense.find({ userId: userId }).select('amount');
        // try to fetch only one column 
          //      console.log("result" , result) ;
               let amount = 0 ;
               for(let c of result)
               {
                   amount += c.amount;
               }
               console.log("Amount is", amount) ;
        const totalAmount = amount
        res.status(200).json({ userId, totalAmount });
    } catch (error) {
        console.error("Error in /total-expenses/:userId: ", error);
        res.status(500).json({ error: "An error occurred while calculating total expenses." });
    }
};



exports.getOverallExpense =  async (req, res) => {
  
    try {
        const result = await Expense.find({ }).select('amount');
          // try to fetch only one column 
              // console.log("result" , result) ;
               let amount = 0 ;
               for(let c of result)
               {
                   amount += c.amount;
               }
               console.log("Overall Amount is", amount) ;
        const totalAmount = amount;

        res.status(200).json({ totalAmount });
    } catch (error) {
        console.error("Error in /total-expenses/:userId: ", error);
        res.status(500).json({ error: "An error occurred while calculating total expenses of all." });
    }
};


exports.getUserBalanceSheet =  async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await Expense.find({ userId: userId });
        res.status(200).json({ result });
    } catch (error) {
        console.error("Error in /total-expenses/:userId: ", error);
        res.status(500).json({ error: "An error occurred while calculating total expenses." });
    }
};











