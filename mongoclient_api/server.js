const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
require('dotenv').config();
let collection = null;

app.listen(3002, () => {
  console.log('Connected on 3002');
});

app.get('/', async (req, res) => {
  const result = await collection.findOne({ name: 'Cheese and Pomodoro' });
  res.send(result);
});

// Connection URL
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

// Create client
const client = new MongoClient(url);

// Database Name
const dbName = 'pizzasdb_mongoclient_crud';

async function main() {
  try {
    // Use connect method to connect to the server
    await client.connect();

    // db handle for convenience
    const db = client.db(dbName);

    // find the collection
    collection = db.collection('pizzas');

    return 'Connected successfully to server';
  } catch (e) {
    console.log(e.message);
  }
}

main().then(console.log).catch(console.error);
