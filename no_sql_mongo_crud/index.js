const { MongoClient } = require('mongodb');
require('dotenv').config();

// Connection URL
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

// Create client
const client = new MongoClient(url);

// Database Name
const dbName = 'pizzasdb_mongoclient_crud';

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

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');

  //
  const db = client.db(dbName);
  const collection = db.collection('pizzas');

  // CREATE
  await collection.insertMany(data);

  // READ
  const read = await collection.findOne({ name: 'Cheese and Tomato' });
  console.log(read);

  // READ ALL
  const read_all = await collection.find({}).toArray();
  console.log(read_all);

  // UPDATE
  const update = await collection.updateOne(
    { name: 'Cheese and Tomato' },
    { $set: { name: 'Cheese and Pomodoro' } }
  );
  console.log(update);

  // DELETE
  const del = await collection.deleteOne({ name: 'The Spicy One' });
  console.log(del);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
