const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
app.use(bodyParser.json({limit: "500mb", extended: true} ));
app.use(bodyParser.urlencoded({limit: "500mb", extended: true}));
app.use(express.json());
// var mysql = require('mysql');
app.use(cors())

require("./routes/api")(app);


mongoose
  .connect("mongodb://127.0.0.1:27017/expense-share", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async (res) => {
    const server = app.listen(port, () =>
      console.log(`Server running at ${port}`)
    );
    
    console.log("Database Connected");
  });

// app.listen(port, ()=> { 
//     console.log(`Server running at ${port}`)
// });