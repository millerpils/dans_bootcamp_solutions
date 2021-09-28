const express = require('express');
const app = express();
const port = 8001;
const _RESTAURANTS = require('./json/restaurants.json');
const _MENUS = require('./json/menus.json');
const _MENUITEMS = require('./json/menuitems.json');
const { connection } = require('./sequelize-connect');
const restaurantRoutes = require('./routes/api/restaurant');
const menuRoutes = require('./routes/api/menu');
const menuitemRoutes = require('./routes/api/menuitem');

// support req.body parsing
app.use(express.json());

async function start() {
  // await Restaurant.bulkCreate(_RESTAURANTS);
  // await Menu.bulkCreate(_MENUS);
  // await MenuItem.bulkCreate(_MENUITEMS);

  await connection.sync({
    logging: console.log,
    // force: true,
  });
}

start()
  .then(() => {
    console.log('Sequelize connected');
  })
  .catch((e) => console.log(e));

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/menuitems', menuitemRoutes);

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
