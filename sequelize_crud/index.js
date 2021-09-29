const { connection } = require('./sequelize-connect');
const restaurant = require('./resources/restaurant');
const menu = require('./resources/menu');
const menuItem = require('./resources/menuitem');

async function start() {
  await connection.sync({
    logging: console.log,
    // force: true,
  });
}

start()
  .then(() => {
    console.log('Sequelize connected');
    create();
  })
  .catch((e) => console.log(e));

async function create() {
  await restaurant.create();
  await menu.create();
  await menuItem.create();
}
