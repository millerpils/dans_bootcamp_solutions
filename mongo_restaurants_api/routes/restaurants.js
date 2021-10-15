const express = require('express');
const Router = express.Router();
const { Restaurant } = require('../models/models');

// CREATE
Router.post('/', async (req, res) => {
  try {
    await Restaurant.create(req.body);
    res.send('done');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// READ ALL
Router.get('/', async (req, res) => {
  try {
    const result = await Restaurant.find({});
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// READ ALL
Router.get('/:id/menus', async (req, res) => {
  try {
    const result = await Restaurant.findOne({ _id: req.params.id });
    res.send(result.menus);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// READ All menuitems that belong to a menu that itself belongs to a restaurant
Router.get('/:restaurant_id/menus/:menu_id/menuitems', async (req, res) => {
  try {
    const result = await Restaurant.findOne(
      { _id: req.params.restaurant_id },
      { menus: { $elemMatch: { _id: req.params.menu_id } } }
    );

    res.send(result.menus[0].menuitems);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// READ
Router.get('/:id', async (req, res) => {
  try {
    const result = await Restaurant.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// UPDATE
Router.put('/:id', async (req, res) => {
  try {
    const result = await Restaurant.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        imagelink: req.body.imagelink,
      }
    );
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE
Router.delete('/:id', async (req, res) => {
  try {
    const result = await Restaurant.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Can apprentices write a patch request?

module.exports = Router;
