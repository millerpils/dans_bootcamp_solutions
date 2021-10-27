// https://sequelize.org/master/manual/assocs.html

const { connection } = require('./sequelize-connect');
const restaurant = require('./resources/restaurant');
const menu = require('./resources/menu');
const menuItem = require('./resources/menuitem');

/**
 * Runs all the functions
 */
async function main() {
  try {
    await start();
    const objects = await createRows();
    await runQueries(objects);
  } catch (e) {
    throw new Error(e.message);
  }
}

// run main and log any errors
main().catch((e) => console.log(`Caught error: ${e}`));

/**
 * Synchronize all models with db
 */
async function start() {
  await connection.sync({
    logging: false,
    force: true, // drop tables each time
  });
}

/**
 * Creates the instances and tables
 * @returns array of objects
 */
async function createRows() {
  // create the objects and rows
  const theRestaurant = await restaurant.create();
  const theMenu = await menu.create();
  const theMenuItem = await menuItem.create();

  // add the associations (foreign keys)
  await theRestaurant.addMenu(theMenu);
  await theMenu.addMenuItem(theMenuItem);

  return [theRestaurant, theMenu, theMenuItem];
}

/**
 * A space to run any queries
 * @param [] array of objects
 */
async function runQueries(objects) {
  [theRestaurant] = objects;

  const results = await restaurant.get(); // get all restaurants
  const result = await menu.get(theRestaurant); // get all menus that belong to a restaurant

  // update the restuarant
  // await restaurant.update(theRestaurant, {
  //   name: 'New name',
  //   imagelink: 'Some new image',
  // });

  console.log(`**** Found all restos: ${JSON.stringify(results)}`);
  console.log(`**** Found all menus: ${JSON.stringify(result)}`);

  // delete the restaurant
  //await restaurant.del(theRestaurant);
}
