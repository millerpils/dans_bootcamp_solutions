const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const url = 'http://localhost:3001/api/restaurants';

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
  console.log(req.body);

  try {
    const restaurants = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(req.body),
    });
    console.log(restaurants);
    res.redirect('/restaurants');
  } catch (e) {
    return next(error);
  }
});

// READ
Router.get('/', async (req, res, next) => {
  try {
    const restaurants = await fetch(url, {
      method: 'GET',
    });
    console.log(restaurants);
    res.render('restaurants', { restaurants });
  } catch (error) {
    return next(error);
  }
});

// // READ
// Router.get('/:id', async (req, res, next) => {
//   try {
//     const restaurant = await api.getOne(req.params.id)
//     res.render('restaurant', { restaurant })
//   } catch (error) {
//     return next(error);
//   }
// });

// // DELETE
// Router.delete('/:id', async (req, res, next) => {
//   try {
//     await api.deleteOne(req.params.id)
//     res.send('done')
//   } catch (error) {
//     return next(error);
//   }
// });

module.exports = Router;
