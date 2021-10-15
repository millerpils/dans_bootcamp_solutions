const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const config = require('../../config');

// ADD NEW PAGE
Router.get('/new', (req, res) => {
  res.render('newRestaurant');
});

// EDIT PAGE
Router.get('/:id/edit', async (req, res) => {
  try {
    const response = await fetch(config.apiUrl + '/' + req.params.id, {
      method: 'GET',
    });
    const restaurant = await response.json();
    res.render('updateRestaurant', { restaurant });
  } catch (error) {
    return next(error);
  }
});

// CREATE
Router.post('/', async (req, res, next) => {
  try {
    await fetch(config.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    res.redirect('/restaurants');
  } catch (e) {
    return next(e);
  }
});

// READ
Router.get('/', async (req, res, next) => {
  try {
    const response = await fetch(config.apiUrl, {
      method: 'GET',
    });
    const restaurants = await response.json();
    res.render('restaurants', { restaurants });
  } catch (error) {
    return next(error);
  }
});

// READ
Router.get('/:id', async (req, res, next) => {
  try {
    const response = await fetch(config.apiUrl + '/' + req.params.id, {
      method: 'GET',
    });
    const restaurant = await response.json();
    res.render('restaurant', { restaurant });
  } catch (error) {
    return next(error);
  }
});

module.exports = Router;
