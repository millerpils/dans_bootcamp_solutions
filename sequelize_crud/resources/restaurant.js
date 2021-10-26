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

  /**
   * Delete a restaurant
   * @param {} restaurant object
   */
  del: async function (restaurant) {
    try {
      await Restaurant.destroy({
        where: {
          id: restaurant.id,
        },
      });
      console.log(`Deleted`);
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * Update a resto with new data
   * @param {} restaurant the restaurant
   * @param {} newData the new data obj
   */
  update: async function (restaurant, newData) {
    try {
      await Restaurant.update(newData, {
        where: {
          id: restaurant.id,
        },
      });
      console.log(`Updated`);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = restaurant;
