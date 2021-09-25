const express = require('express');
const Router = express.Router();
const Pizza = require('../models/pizza');

// CREATE
Router.post('/pizzas', async (req, res) => {
  const result = await Pizza.create(req.body);
  res.send(result);
});

// READ ALL
Router.get('/pizzas', async (req, res) => {
  const result = await Pizza.find({});
  res.send(result);
});

// READ
Router.get('/pizzas/:id', async (req, res) => {
  const result = await Pizza.findOne({ _id: req.params.id });
  res.send(result);
});

// UPDATE
Router.put('/pizzas/:id', async (req, res) => {
  const result = await Pizza.updateOne(
    { _id: req.params.id },
    {
      name: req.body.name,
      shape: req.body.shape,
      price: req.body.price,
    }
  );
  res.send(result);
});

// DELETE
Router.delete('/pizzas/:id', async (req, res) => {
  const result = await Pizza.deleteOne({ _id: req.params.id });
  res.send(result);
});

// Can apprentices write a patch request?

module.exports = Router;
