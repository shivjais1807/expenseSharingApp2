const userServices = require("../services/userServices");
const User = require("../models/user");

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

// creates a new user 
exports.createUser = async (req,res,next) =>{
    console.log("created");
    try {
             
        // Check if email is valid or not 
         const useremail =  req.body.email ;
          if(validateEmail(useremail))
          {
            res.status(400).send('Email is in Invalid format');
          }
          
          // Check if already username exist or email exist
         const existingUser = await User.findOne({ username: req.body.username });
         const existingUserEmail = await User.findOne({ useremail: req.body.email });
         if (existingUser) return res.status(400).send('Username already exists');
         if (existingUserEmail) return res.status(400).send('Email already exists');

        const {username, email, mobile} = req.body;
 
        let response = await userServices.createUser({username, email, mobile});
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

//Retrieve User Details
exports.getUserDetails = async(req,res,next) =>{
    console.log("getUser");
   
    try {
        const user = await userServices.getUserDetails(req.params.userId);
        //console.log("user" , user) ;
       if(user){
        res.status(200).json({status:200, data : user});
           
       }
      } 
      catch (err) {
        res.status(500).send(err.message);
      }

}