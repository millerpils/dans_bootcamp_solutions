const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const url = 'http://localhost:3001/api/restaurants';

// add confgi with url
// fix update and edit

// ADD NEW PAGE
Router.get('/new', (req, res) => {
  res.render('newRestaurant');
});

// // EDIT PAGE
// Router.get("/:id/edit", async (req, res) => {
//   try {
//     const restaurant = await api.getOne(req.params.id)
//     res.render('updateRestaurant', { restaurant })
//   } catch (error) {
//     return next(error);
//   }
// })

// // UPDATE
// Router.put("/:id", async (req, res, next) => {
//   try {
//     await api.update(req.body)
//     res.send('done')
//   } catch (error) {
//     return next(error);
//   }
// })

// CREATE
Router.post('/', async (req, res, next) => {
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    res.redirect('/restaurants');
  } catch (e) {
    return next(error);
  }
});

// READ
Router.get('/', async (req, res, next) => {
  try {
    const response = await fetch(url, {
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
    const response = await fetch(url + '/' + req.params.id, {
      method: 'GET',
    });
    const restaurant = await response.json();
    res.render('restaurant', { restaurant });
  } catch (error) {
    return next(error);
  }
});

// DELETE
Router.delete('/:id', async (req, res, next) => {
  try {
    const response = await fetch(url + '/' + req.params.id, {
      method: 'DELETE',
    });
    res.send('done');
  } catch (error) {
    return next(error);
  }
});

module.exports = Router;
