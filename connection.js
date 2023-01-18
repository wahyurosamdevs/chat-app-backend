const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.hi1smgw.mongodb.net/chat?retryWrites=true&w=majority`,() => {
  console.log('connect to mongodb');
});