const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () =>{
    console.log("here we are");
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("DB Connected"))
    .catch( (error) =>{
        console.log("DB coonection failed");
        console.log(error);
        process.exit(1);
    })
};