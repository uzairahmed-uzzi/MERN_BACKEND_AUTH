const mongoose = require('mongoose');

async function connectDb(){
    try{
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true
      });
      console.log("Database Connected");
    }
    catch(error){
      console.log(error);
      process.exit(1);
    }
  }
  

  module.exports = connectDb;