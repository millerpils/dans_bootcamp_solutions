const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  shape: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Pizza = mongoose.model('Pizza', PizzaSchema);

module.exports = Pizza;
