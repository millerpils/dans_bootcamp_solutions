const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Pizza = mongoose.model('Pizza', PizzaSchema);

module.exports = Pizza;
