const { Restaurant } = require('../sequelize-connect');

const restaurant = {
  /**
   * Creates a new restaurant in the DB
   * @returns {} restaurant object
   */
  create: async function () {
    try {
      return await Restaurant.create({
        name: 'Pizza Hut',
        imagelink: 'http://domain.myimagelink.jpg',
      });
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * Finds all restaurants
   */
  get: async function () {
    try {
      return await Restaurant.findAll({});
    } catch (e) {
      throw new Error(e.message);
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
      throw new Error(e.message);
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
      throw new Error(e.message);
    }
  },
};

module.exports = restaurant;
