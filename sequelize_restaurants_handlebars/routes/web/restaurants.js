const { Restaurant } = require('../../sequelize-connect');
const express = require('express');
const Router = express.Router();

// READ
Router.get('/', async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll({});
    res.render('restaurants', { restaurants });
  } catch (error) {
    return next(error);
  }
});

// READ
Router.get('/:id', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({
      where: { id: req.params.id },
    });
    res.render('restaurant', { restaurant });
  } catch (error) {
    return next(error);
  }
});

// DELETE
Router.delete('/:id', async (req, res, next) => {
  try {
    await Restaurant.destroy({
      where: { id: req.params.id },
    });
    res.send('done')
  } catch (error) {
    return next(error);
  }
});

module.exports = Router;
