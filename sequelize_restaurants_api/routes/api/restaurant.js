const { Restaurant, Menu } = require('../../sequelize-connect');
const express = require('express');
const Router = express.Router();

// CREATE
Router.post('/', async (req, res) => {
  try {
    const restaurant = await Restaurant.create({
      name: req.body.name,
      imagelink: req.body.imagelink,
    });
    res.send(restaurant);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// READ
Router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      include: [Menu],
    });
    res.send(restaurants);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// READ
Router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      where: { id: req.params.id },
      include: [Menu],
    });
    res.send(restaurant);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// UPDATE
Router.put('/:id', async (req, res) => {
  console.log('here');
  try {
    const result = await Restaurant.update(
      {
        name: req.body.name,
        imagelink: req.body.imagelink,
      },
      {
        where: { id: req.params.id },
        include: [Menu],
      }
    );
    res.send(result);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// UPDATE
Router.patch('/:id', async (req, res) => {
  restaurantData = {};

  Object.keys(req.body).forEach((key) => {
    restaurantData[key] = req.body[key];
  });

  try {
    const result = await Restaurant.update(restaurantData, {
      where: { id: req.params.id },
    });
    res.send(result);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// DELETE
Router.delete('/:id', async (req, res) => {
  try {
    const result = await Restaurant.destroy({
      where: { id: req.params.id },
    });
    res.send(`${result} row deleted`);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = Router;
