const { MenuItem } = require('../sequelize-connect');

const menuItem = {
  /**
   * Creates a menu item and assigns it to a menu
   *
   * @param {} menu object
   * @returns menuItem
   */
  create: async function (menu) {
    const menuItem = await MenuItem.create({
      name: 'Pizza',
      price: 6.99,
    });

    return menuItem;
  },
};

module.exports = menuItem;
