# About

A simple node script that connects to a Mongo server (be it local/Atlas) to CRUD
some pizzas in a pizza database.

Requires a .env file in the root dir with the following:

DB_HOST=cluster0.swfr3.mongodb.net/yourDBNamehere?retryWrites=true&w=majority
DB_USER=your un
DB_PASS=your pw

To run, simple type `node index` in the console.

# Jest Tests

Head to index.test.js and run the tests therein by running `jest index.jest.js` in the console
