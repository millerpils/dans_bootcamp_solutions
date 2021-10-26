const { MenuItem } = require('../sequelize-connect');

const menuItem = {
  /**
   * Creates a menu item and assigns it to a menu
   *
   * @param {} menu object
   * @returns menuItem
   */
  create: async function () {
    try {
      return await MenuItem.create({
        name: 'Pizza',
        price: 6.99,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

module.exports = menuItem;
