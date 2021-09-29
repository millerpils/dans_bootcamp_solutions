const { connection, Restaurant } = require('../sequelize-connect');

async function start() {
  await connection.sync({
    force: true, // drop the db tables
  });
}

describe('restaurant', () => {
  beforeAll(() => {
    // since state() returns a promise...
    return start().then(() => {
      console.log('Sequelize connected');
    });
  });

  afterAll(async () => {
    await connection.close();
    console.log('Sequelize disconnected');
  });

  test('it can create a restaurant', async () => {
    const restaurant = await Restaurant.create({
      name: 'Pizza Hut',
      imagelink: 'http://domain.myimagelink.jpg',
    });

    expect(restaurant.name).toBe('Pizza Hut');
  });
});
