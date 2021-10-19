const express = require('express');
const app = express();
const dbStart = require('./database');
let collection = null;
const port = 3002;

// Database Name
const dbName = 'pizzasdb_mongoclient_crud';

app.listen(port, () => {
  console.log(`Connected on ${port}`);
});

app.get('/', async (req, res) => {
  const results = await collection.find({}).toArray();
  res.send(results);
});

dbStart().then((client) => {
  // db handle for convenience
  const db = client.db(dbName);

  // find the collection
  collection = db.collection('pizzas');

  console.log('Connected to Mongo Atlas');
});
