const { MongoClient } = require('mongodb');
require('dotenv').config();

const data = [
  {
    name: 'Neapolitan',
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

async function start() {
  // connection URI
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

  try {
    // create a new MongoClient
    client = new MongoClient(uri);

    // connect to mongo
    await client.connect();
    // remove the collection first
    await client.db('pizzaDB').collection('pizzas').drop();
  } catch (e) {
    throw new Error(e.message);
  }

  await queries().catch((err) => console.log('Error:', err.message));
  await client.close();
}

async function queries() {
  // CREATE
  await client.db('pizzaDB').collection('pizzas').insertMany(data);

  // READ
  await client
    .db('pizzaDB')
    .collection('pizzas')
    .findOne({ name: 'Cheese and Tomato' });

  // READ
  await client.db('pizzaDB').collection('pizzas').find().toArray();

  // UPDATE
  await client
    .db('pizzaDB')
    .collection('pizzas')
    .updateOne(
      { name: 'Cheese and Tomato' },
      { $set: { name: 'Cheese and Pomodoro' } }
    );

  // DELETE
  await client
    .db('pizzaDB')
    .collection('pizzas')
    .deleteOne({ name: 'The Spicy One' });
}

start()
  .then(() => console.log('Finished!'))
  .catch((e) => console.log(e.message));
