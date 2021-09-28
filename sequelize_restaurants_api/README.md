# Intro/about

An additional Sequelize CRUD API example that has Restaurants, Menus and Menu Items. Useful to compare
and contrast with the class based models that the Restaurants example uses.

# Usage

- Run NPM install
- Run `node server`. This should create and connect to the DB
- Open up Postman/other API testing tool and create Users, Posts, etc

# Notes

- When adding Menus and Menu Items, a RestaurantId or MenuId needs to be sent
- [DB Browser](https://sqlitebrowser.org/dl/) is a great tool to see the foreign keys Sequelize adds for you
- The json files can be used to 'bulk create' users in the DB. See server.js code

# Future development

Make it better?

Happy hacking!

-Dan
