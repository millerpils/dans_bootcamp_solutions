const express = require('express');
const app = express();
const dbStart = require('./database');
const ObjectId = require('mongodb').ObjectId;
let collection = null;
const port = 3002;
const dbName = 'restaurantsdb';

// pass json bodies
app.use(express.json());

// create pizzas
app.post('/api/restaurants', async (req, res) => {
  try {
    const result = await collection.insertOne(req.body);
    res.send(result);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// read all pizzas
app.get('/api/restaurants', async (req, res) => {
  const results = await collection.find({}).toArray();
  res.send(results);
});

// read one pizza
app.get('/api/restaurants/:id', async (req, res) => {
  const oId = new ObjectId(req.params.id);
  const result = await collection.findOne({ _id: oId });
  res.send(result);
});

// update a pizza
app.put('/api/restaurants/:id', async (req, res) => {
  const oId = new ObjectId(req.params.id);

  const update = await collection.updateOne(
    { _id: oId },
    {
      $set: {
        name: req.body.name,
        imagelink: req.body.imagelink,
      },
    }
  );

  res.send(update);
});

// Find a restaurant by ID with a menu title that equals the query param
app.get('/api/restaurants/:restaurant_id/menus', async (req, res) => {
  const restaurant_oId = new ObjectId(req.params.restaurant_id);

  try {
    const result = await collection.findOne({
      _id: restaurant_oId,
      menus: { $elemMatch: { title: req.query.title } },
    });

    if (!result) {
      return res.status(404).send();
    }

    res.send(result);
  } catch (e) {
    res.send(e.message);
  }
});

// delete a pizza
app.delete('/api/restaurants/:id', async (req, res) => {
  const oId = new ObjectId(req.params.id);
  const del = await collection.deleteOne({ _id: oId });
  res.send(del);
});

// Call dbStart to start server
dbStart().then((client) => {
  // db handle for convenience
  const db = client.db(dbName);

  // find the collection
  collection = db.collection('restaurants');

  if (!collection) {
    db.createCollection('restaurants', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['name', 'imagelink'],
          properties: {
            name: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
            imagelink: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
          },
        },
      },
    });
  }

  console.log('Connected to Mongo Atlas');
});

// start the express server
app.listen(port, () => {
  console.log(`Connected on ${port}`);
});
