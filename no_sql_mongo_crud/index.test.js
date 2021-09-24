const { MongoClient } = require('mongodb');
require('dotenv').config();
let client = null;

const data = [
  {
    name: 'Neopolitan',
    shape: 'round',
    price: 9.99,
  },
  {
    name: 'Cheese and Tomato',
    shape: 'round',
    price: 5.99,
  },
  {
    name: 'The Spicy One',
    shape: 'rectangle',
    price: 6.99,
  },
  {
    name: 'Tuna and Sweetcorn',
    shape: 'Oval',
    price: 6.99,
  },
];

describe('pizzas CRUD', () => {
  beforeAll(async () => {
    // connection URI
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

    try {
      // create a new MongoClient
      client = new MongoClient(uri);

      // connect to mongo
      await client.connect();

      // drop the connection first
      const pizzaCollection = await client.db('pizzaDB').collection('pizzas');
      await pizzaCollection.drop();
    } catch (e) {
      throw new Error('There was a problem connecting to or dropping the DB.');
    }
  });

  afterAll(async () => {
    await client.close();
  });

  test('it should insert data to mongo', async () => {
    const result = await client
      .db('pizzaDB')
      .collection('pizzas')
      .insertMany(data);

    expect(result.insertedCount).toBeGreaterThan(2);
  });

  test('it should find one from mongo', async () => {
    const result = await client
      .db('pizzaDB')
      .collection('pizzas')
      .findOne({ name: 'Cheese and Tomato' });

    expect(result.name).toBe('Cheese and Tomato');
  });

  test('it should find all pizzas from mongo', async () => {
    const result = await client
      .db('pizzaDB')
      .collection('pizzas')
      .find()
      .toArray();

    expect(typeof result).toBe('object');
    expect(result[0].name).toBe('Neopolitan');
  });

  test('it should be able to update a pizza', async () => {
    const result = await client
      .db('pizzaDB')
      .collection('pizzas')
      .updateOne(
        { name: 'Cheese and Tomato' },
        { $set: { name: 'Cheese and Pomodoro' } }
      );

    expect(result.modifiedCount).toEqual(1);
  });

  test('it should be able to delete a pizza', async () => {
    const result = await client
      .db('pizzaDB')
      .collection('pizzas')
      .deleteOne({ name: 'The Spicy One' });

    expect(result.deletedCount).toEqual(1);
  });
});
