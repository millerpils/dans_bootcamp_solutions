const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const config = require('../../config');
const url = `${config.url.restaurants}`;

// ADD NEW PAGE
Router.get('/new', (req, res) => {
  res.render('newRestaurant');
})

  // EDIT PAGE
  .get('/:id/edit', async (req, res) => {
    try {
      const response = await fetch(`${url}/${req.params.id}`);
      const restaurant = await response.json();
      res.render('updateRestaurant', { restaurant });
    } catch (error) {
      return next(error);
    }
  })

  // CREATE
  .post('/', async (req, res, next) => {
    try {
      await fetch(url, {
        method: 'post',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' },
      });
      res.redirect('/restaurants');
    } catch (error) {
      return next(error);
    }
  })

  // READ
  .get('/', async (req, res, next) => {
    try {
      const response = await fetch(url);
      const restaurants = await response.json();
      res.render('restaurants', { restaurants });
    } catch (error) {
      return next(error);
    }
  })

  // READ BY ID
  .get('/:id', async (req, res, next) => {
    try {
      const response = await fetch(`${url}/${req.params.id}`);
      const restaurant = await response.json();
      res.render('restaurant', { restaurant });
    } catch (error) {
      return next(error);
    }
  });

module.exports = Router;
