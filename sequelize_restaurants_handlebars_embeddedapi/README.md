# Intro/about

An Sequelize CRUD API example that has Restaurants, Menus and Menu Items. Offloads
returned JSON to Handlebars templates for rendering.

# Usage

- Run NPM install
- Run `node server`. This should create and connect to the DB
- See routes in `/routes/api/`

# Notes

- When adding Menus and Menu Items, a RestaurantId or MenuId needs to be sent
- [DB Browser](https://sqlitebrowser.org/dl/) is a great tool to see the foreign keys Sequelize adds for you
- The json files can be used to 'bulk create' users in the DB. See server.js code

# Future development

Make it better?

Happy hacking!

-Dan
