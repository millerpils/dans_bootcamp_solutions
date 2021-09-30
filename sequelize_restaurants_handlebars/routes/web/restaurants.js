const { Restaurant } = require('../../sequelize-connect');
const express = require('express');
const Router = express.Router();

// READ
Router.get('/', async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll({});
    res.render('restaurants', { restaurants });
  } catch (e) {
    return next(e);
  }
});

// READ
Router.get('/:id', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({
      where: { id: req.params.id },
    });
    res.render('restaurant', { restaurant });
  } catch (e) {
    return next(e);
  }
});

module.exports = Router;
