const { Restaurant } = require('../sequelize-connect');

const restaurant = {
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
