const mongoose = require('mongoose');
const express = require('express');
const apiRoutes = require('./routes/api');
require('dotenv').config();

// init express
const app = new express();

// parse req body
app.use(express.json());

// connect to mongo
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connected to Atlas');
  }
);

// API Routes
app.use('/api', apiRoutes);

// listen on port
app.listen(3001, () => {
  console.log('App listening on port 3001');
});
