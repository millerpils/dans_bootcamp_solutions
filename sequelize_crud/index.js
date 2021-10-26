// https://sequelize.org/master/manual/assocs.html

const { connection } = require('./sequelize-connect');
const restaurant = require('./resources/restaurant');
const menu = require('./resources/menu');
const menuItem = require('./resources/menuitem');

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
  .then((objects) => {
    console.log('Tables created');
    runQueries(objects);
  })
  .catch((e) => console.log(e));

/**
 * A space to run any queries
 * @param [] array of objects
 */
async function runQueries(objects) {
  [theRestaurant] = objects;

  const results = await restaurant.get(); // get all restaurants
  const result = await menu.get(theRestaurant); // get all menus that belong to a restaurant

  console.log(`Found all restos: ${JSON.stringify(results)}`);
  console.log(`Found one resto: ${JSON.stringify(result)}`);

  // update the restuarant
  await restaurant.update(theRestaurant, {
    name: 'New name',
    imagelink: 'Some new image',
  });

  // delete the restaurant
  //await restaurant.del(theRestaurant);
}

/**
 * Creates the instances and tables
 * @returns array of objects
 */
async function createTables() {
  // create the objects (and tables!)
  const theRestaurant = await restaurant.create();
  const theMenu = await menu.create();
  const theMenuItem = await menuItem.create();

  // add the associations (foreign keys)
  await theRestaurant.addMenu(theMenu);
  await theMenu.addMenuItem(theMenuItem);

  return [theRestaurant, theMenu, theMenuItem];
}
