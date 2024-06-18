// import express from "express"
// import mongoose from "mongoose"
// import dotenv from "dotenv"


// const app=express();
// dotenv.config();

// const PORT = process.env.PORT || 7000;
// const MONGOURL = process.env.MONGO_URL;

// mongoose.connect("MONGOURL").then(()=>{
//     console.log("Database connected succesfully");
//     app.listen(PORT,()=>{
//         console.log(`server is running on ${PORT}`);
//     });
// }).catch((error)=>console.log(error));

const mongoose = require('mongoose');

const uri = 'mongodb+srv://jaysharma89533:%23jayDB@jaymongodb.fdlxsvh.mongodb.net/';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));
