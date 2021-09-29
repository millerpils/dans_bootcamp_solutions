const { MenuItem } = require('../sequelize-connect');

const menuItem = {
  create: async function () {
    try {
      const result = await MenuItem.create({
        name: 'Pizza',
        price: 9.99,
        MenuId: 1,
      });

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = menuItem;
