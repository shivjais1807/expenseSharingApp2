const User = require("../models/user");
const mongoose = require('mongoose');

exports.createUser = async (userData) => {
    console.log("userData",userData);
    let promise = new Promise(async (resolve, reject) => {
      try {
        const user = await User(userData).save();
        if( user )
          resolve( user );
        
      } catch (err) {
        reject(err);
      }
    });
    return promise;
  };


  exports.getUserDetails = async (userId) => {
  //console.log("userId1" , userId);
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw { code: 400, data: "Invalid User ID" };
  }

  try {
  
    let userFound = await User.findById(userId);
   // console.log("user", userFound);
    if (!userFound) {
      throw { code: 400, data: "User Not Found" };
    }
    console.log("User found:", userFound);
    return userFound;
  } catch (err) {
    throw err;
  }
  };
  