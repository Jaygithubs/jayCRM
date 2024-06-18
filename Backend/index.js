const mongoose = require('mongoose');

const uri = 'mongodb+srv://jaysharma89533:%23jayDB@jaymongodb.fdlxsvh.mongodb.net/';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));
