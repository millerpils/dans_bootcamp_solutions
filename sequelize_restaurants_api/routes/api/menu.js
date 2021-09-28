const { Menu, MenuItem } = require('../../sequelize-connect');
const express = require('express');
const Router = express.Router();

// CREATE
Router.post('/', async (req, res) => {
  try {
    const menu = await Menu.create({
      title: req.body.title,
      RestaurantId: req.body.RestaurantId,
    });
    res.send(menu);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// READ
Router.get('/', async (req, res) => {
  try {
    const menus = await Menu.findAll({
      include: [MenuItem],
    });
    res.send(menus);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = Router;
