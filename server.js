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
  .connect("mongodb+srv://test:test@cluster0.tyyfzgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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
