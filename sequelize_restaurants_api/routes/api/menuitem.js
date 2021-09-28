const { Menu, MenuItem } = require('../../sequelize-connect');
const express = require('express');
const Router = express.Router();

// CREATE
Router.post('/', async (req, res) => {
  try {
    const menuitem = await MenuItem.create({
      name: req.body.name,
      price: req.body.price,
      MenuId: req.body.MenuId,
    });
    res.send(menuitem);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// READ
Router.get('/', async (req, res) => {
  try {
    const menuitems = await MenuItem.findAll({
      include: [Menu],
    });
    res.send(menuitems);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = Router;
