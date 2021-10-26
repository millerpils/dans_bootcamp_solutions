// https://sequelize.org/master/manual/assocs.html

const { connection } = require('./sequelize-connect');
const restaurant = require('./resources/restaurant');
const menu = require('./resources/menu');
const menuItem = require('./resources/menuitem');
let theRestaurant,
  theMenu,
  theMenuItem = null;

async function start() {
  await connection.sync({
    logging: false,
    force: true, // drop tables each time
  });
}

start()
  .then(() => {
    console.log('Sequelize connected');
    return createTables();
  })
  .then(() => {
    console.log('Tables created');
    runQueries();
  })
  .catch((e) => console.log(e));

async function runQueries() {
  await restaurant.get(); // get all restaurants
  await menu.get(theRestaurant); // get all menus that belong to a restaurant

  // update the restuarant
  await restaurant.update(theRestaurant, {
    name: 'New name',
    imagelink: 'Some new image',
  });

  // delete the restaurant
  //await restaurant.del(theRestaurant);
}

async function createTables() {
  // create the objects (and tables!)
  theRestaurant = await restaurant.create();
  theMenu = await menu.create();
  theMenuItem = await menuItem.create();

  // add the associations (foreign keys)
  await theRestaurant.addMenu(theMenu);
  await theMenu.addMenuItem(theMenuItem);
}
