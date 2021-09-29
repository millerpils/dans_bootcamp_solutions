const { Menu } = require('../sequelize-connect');

const menu = {
  create: async function () {
    try {
      const result = await Menu.create({
        title: 'Pizza menu',
        RestaurantId: 1,
      });

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = menu;
