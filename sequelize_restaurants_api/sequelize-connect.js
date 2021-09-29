const Sequelize = require('sequelize');

const {
  restaurantModel,
  menuModel,
  menuItemModel,
} = require('./models/models');

// connects to the db on localhost
const connection = new Sequelize('db', 'user', 'pass', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database/db.sqlite',
});

// define our models
const Restaurant = connection.define('Restaurant', restaurantModel);
const Menu = connection.define('Menu', menuModel);
const MenuItem = connection.define('MenuItem', menuItemModel);

// one-to-one relationship
Menu.belongsTo(Restaurant);

// one-to-one relationship
MenuItem.belongsTo(Menu);

// one-to-many relationship
Restaurant.hasMany(Menu);

// one-to-many relationship
Menu.hasMany(MenuItem);

module.exports = { connection, Restaurant, Menu, MenuItem };
