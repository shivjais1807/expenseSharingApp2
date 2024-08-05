const mongoose = require('mongoose');


const expenseSchema = new mongoose.Schema(
    {
        description:{ 
          type:String,
          required: true
        },
        userId: 
        { 
          type: mongoose.Schema.Types.ObjectId, ref: 'User' 
        }, 
        amount:{
            type:Number,
            required: true
             },
             

        // splitMethod:{
        //     type: String, 
        //     enum: ['equal', 'exact', 'percentage'], 
        //     required: true
        // },
        // participants: [
        //     {
        //       userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        //       amount: { type: Number },
        //       percentage: { type: Number },
        //     }
        //   ],
          date: { type: Date, default: Date.now },
    } , {timestamps:true}); 


module.exports  = mongoose.model("Expense" , expenseSchema) ;