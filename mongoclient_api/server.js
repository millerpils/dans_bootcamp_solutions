const express = require('express');
const app = express();
const dbStart = require('./database');
const ObjectId = require('mongodb').ObjectId;
let collection = null;
const port = 3002;
const dbName = 'pizzasdb_mongoclient_crud';

// pass json bodies
app.use(express.json());

// create pizzas
app.post('/api/pizzas', async (req, res) => {
  const result = await collection.insertOne(req.body);
  res.send(result);
});

// read all pizzas
app.get('/api/pizzas', async (req, res) => {
  const results = await collection.find({}).toArray();
  res.send(results);
});

// read one pizza
app.get('/api/pizzas/:id', async (req, res) => {
  const oId = new ObjectId(req.params.id);
  const result = await collection.findOne({ _id: oId });
  res.send(result);
});

// update a pizza
app.put('/api/pizzas/:id', async (req, res) => {
  const oId = new ObjectId(req.params.id);

  const update = await collection.updateOne(
    { _id: oId },
    {
      $set: {
        name: req.body.name,
        shape: req.body.shape,
        price: req.body.price,
      },
    }
  );

  res.send(update);
});

// delete a pizza
app.delete('/api/pizzas/:id', async (req, res) => {
  const oId = new ObjectId(req.params.id);
  const del = await collection.deleteOne({ _id: oId });
  res.send(del);
});

// Call dbStart to start server
dbStart().then((client) => {
  // db handle for convenience
  const db = client.db(dbName);

  // find the collection
  collection = db.collection('pizzas');
  console.log('Connected to Mongo Atlas');
});

// start the express server
app.listen(port, () => {
  console.log(`Connected on ${port}`);
});
