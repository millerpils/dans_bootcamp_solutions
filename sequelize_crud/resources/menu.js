const { Menu } = require('../sequelize-connect');

const menu = {
  /**
   * Gets all menus that belong to a restaurant
   *
   * @param {} restaurant object
   */
  get: async function (restaurant) {
    try {
      const menus = await restaurant.getMenus();
      console.log(`Found ${JSON.stringify(menus)}`);
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * Creates a menu and assigns it to a restaurant
   *
   * @param {} restaurant object
   * @returns the newly create menu
   */
  create: async function () {
    const menu = await Menu.create({
      title: 'Pizza menu',
    });

    return menu;
  },
};

module.exports = menu;
