const { Restaurant } = require('../sequelize-connect');

const restaurant = {
  /**
   * Creates a new restaurant in the DB
   * @returns {} restaurant object
   */
  create: async function () {
    try {
      const restaurant = await Restaurant.create({
        name: 'Pizza Hut',
        imagelink: 'http://domain.myimagelink.jpg',
      });

      return restaurant;
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * Finds all restaurants
   */
  get: async function () {
    try {
      const restaurants = await Restaurant.findAll({});
      console.log(`Found ${JSON.stringify(restaurants)}`);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = restaurant;
