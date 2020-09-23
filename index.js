'use strict';

// require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/products';

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(MONGODB_URI, mongooseOptions);

require('./src/lib/server.js').start(process.env.PORT);
