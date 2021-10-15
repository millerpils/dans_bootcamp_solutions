const mongoose = require('mongoose');
const express = require('express');
const restaurantRoutes = require('./routes/restaurants');
var cors = require('cors');
require('dotenv').config();

// init express
const app = new express();

app.use(cors());

// parse req body
app.use(express.json());

// support urlencoded bodies (e.g. form POST)
app.use(express.urlencoded({ extended: true }));

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
app.use('/api/restaurants', restaurantRoutes);

// listen on port
app.listen(3001, () => {
  console.log('App listening on port 3001');
});
