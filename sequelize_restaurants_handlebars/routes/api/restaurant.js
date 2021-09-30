const { Restaurant } = require('../sequelize-connect');

const restaurant = {
  delete: async function (restaurant_id) {
    try {
      const result = await Restaurant.deleteOne({ id: restaurant_id });
      res.send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  create: async function () {
    try {
      const restaurant = await Restaurant.create({
        name: 'Pizza Hut',
        imagelink: 'http://domain.myimagelink.jpg',
      });

      console.log(restaurant);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = restaurant;

// // DELETE
// Router.delete('/:id', async (req, res) => {
//   try {
//     const result = await Restaurant.destroy({
//       where: { id: req.params.id },
//     });
//     res.send(`${result} row deleted`);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

// // CREATE
// Router.post('/', async (req, res) => {
//   try {
//     const restaurant = await Restaurant.create({
//       name: req.body.name,
//       imagelink: req.body.imagelink,
//     });
//     res.send(restaurant);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

// // UPDATE
// Router.put('/:id', async (req, res) => {
//   try {
//     const result = await Restaurant.update(
//       {
//         name: req.body.name,
//         imagelink: req.body.imagelink,
//       },
//       {
//         where: { id: req.params.id },
//         include: [Menu],
//       }
//     );
//     res.send(result);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

// // UPDATE
// Router.patch('/:id', async (req, res) => {
//   restaurantData = {};

//   Object.keys(req.body).forEach((key) => {
//     restaurantData[key] = req.body[key];
//   });

//   try {
//     const result = await Restaurant.update(restaurantData, {
//       where: { id: req.params.id },
//     });
//     res.send(result);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });
