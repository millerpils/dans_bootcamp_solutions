// https://sequelize.org/master/manual/assocs.html

const { connection } = require('./sequelize-connect');
const restaurant = require('./resources/restaurant');
const menu = require('./resources/menu');
const menuItem = require('./resources/menuitem');

async function start() {
  await connection.sync({
    logging: console.log,
    force: true,
  });
}

start()
  .then(() => {
    console.log('Sequelize connected');
    create();
  })
  .catch((e) => console.log(e));

async function create() {
  // create the restaurant
  const theRestaurant = await restaurant.create();

  // create the menu and assign it to the restaurant
  const theMenu = await menu.create(theRestaurant);

  // create a menu item and assign to a menu
  const theMenuItem = await menuItem.create(theMenu);

  // add the associations
  await theRestaurant.addMenu(theMenu);
  await theMenu.addMenuItem(theMenuItem);

  // get all restaurants
  await restaurant.get();

  // get all menus that belong to a restaurant
  await menu.get(theRestaurant);

  // update the restuarant
  await restaurant.update(theRestaurant, {
    name: 'New name',
    imagelink: 'Some new image',
  });

  // delete the restaurant
  //await restaurant.del(theRestaurant);
}
