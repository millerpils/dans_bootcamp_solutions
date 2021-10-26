const { Menu } = require('../sequelize-connect');

const menu = {
  /**
   * Gets all menus that belong to a restaurant
   *
   * @param {} restaurant object
   */
  get: async function (restaurant) {
    try {
      return await restaurant.getMenus();
    } catch (e) {
      throw new Error(e.message);
    }
  },

  /**
   * Creates a menu and assigns it to a restaurant
   *
   * @param {} restaurant object
   * @returns the newly create menu
   */
  create: async function () {
    try {
      return await Menu.create({
        title: 'Pizza menu',
      });
    } catch (e) {
      throw new Error(e.message);
    }
  },
};

module.exports = menu;
