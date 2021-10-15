const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const MenuSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  menuitems: [MenuItemSchema],
});

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imagelink: {
    type: String,
    required: true,
  },
  menus: [MenuSchema],
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
const Menu = mongoose.model('MenuSchema', MenuSchema);
const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

module.exports = { Restaurant, Menu, MenuItem };
