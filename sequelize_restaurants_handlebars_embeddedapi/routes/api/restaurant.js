const { Restaurant } = require('../../sequelize-connect');

const api = {
  post: async function (restaurant) {
    try {
      return await Restaurant.create({
        name: restaurant.name,
        imagelink: restaurant.imagelink,
      });
    } catch (error) {
      throw new Error(error.message)
    }
  },

  get: async function () {
    try {
      return await Restaurant.findAll({});
    } catch (error) {
      throw new Error(error.message)
    }
  },

  getOne: async function (restaurant_id) {
    try {
      return await Restaurant.findOne({
        where: { id: restaurant_id },
      });
    } catch (error) {
      throw new Error(error.message)
    }
  },

  deleteOne: async function (restaurant_id) {
    try {
      return await Restaurant.destroy({
        where: { id: restaurant_id },
      });
    } catch (error) {
      throw new Error(error.message)
    }
  },

  update: async function(restaurant) {
    try {
      await Restaurant.update({
        name: restaurant.name,
        imagelink: restaurant.imagelink,
      },
        { where: { id: restaurant.id } },
      );
      return 'done'
    } catch (error) {
      throw new Error(error.message)
    }
  }
};

module.exports = api;

