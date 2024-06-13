const mongoose = require('mongoose');
const mogoURI="mongodb+srv://jaysharma89533:<password>@jaymongodb.fdlxsvh.mongodb.net/";

const connectToMongo = () =>
    {
        mongoose.connect(mogoURI, () =>{
            console.log("connnect to mogo successfully");
        })
    }

module.exports = connectToMongo;