const Expense = require("../models/expense");
const mongoose = require('mongoose');

exports.createExpense = async (userData) => {
    console.log("userData",userData);
    let promise = new Promise(async (resolve, reject) => {
      try {
        const user = await Expense.insertMany(userData);
        if( user )
          resolve( user );
        
      } catch (err) {
        reject(err);
      }
    });
    return promise;
  };

  