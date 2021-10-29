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
})

  // READ
  .get('/', async (req, res) => {
    try {
      const restaurants = await Restaurant.findAll({
        include: {
          model: Menu,
          as: 'menus',
        },
      });
      res.send(restaurants);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  // READ
  .get('/:id', async (req, res) => {
    try {
      const restaurant = await Restaurant.findOne({
        where: { id: req.params.id },
        include: [Menu],
      });
      res.send(restaurant);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  // UPDATE
  .put('/:id', async (req, res) => {
    try {
      const result = await Restaurant.update(
        {
          name: req.body.name,
          imagelink: req.body.imagelink,
        },
        {
          where: { id: req.params.id },
          include: {
            model: Menu,
            as: 'menu',
          },
        }
      );
      res.send(result);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  // UPDATE
  .patch('/:id', async (req, res) => {
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
  })

  // DELETE
  .delete('/:id', async (req, res) => {
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
