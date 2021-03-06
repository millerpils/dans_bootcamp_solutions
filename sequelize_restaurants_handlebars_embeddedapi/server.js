const express = require('express');
const app = express();
const port = 8001;
const { connection } = require('./sequelize-connect');
const restaurantRoutes = require('./routes/web/restaurants');
const _RESTAURANTS = require('./json/restaurants.json');
const { Restaurant } = require('./sequelize-connect');
const handlebars = require('./handlebars');

// set-up view "engine"
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

// serve static assets from the public/ folder
app.use(express.static('public'));

// support urlencoded bodies (e.g. form POST)
app.use(express.urlencoded({ extended: true }));

// support json body (e.g FETCH PUT)
app.use(express.json());

async function start() {
  await Restaurant.bulkCreate(_RESTAURANTS);

  await connection.sync({
    logging: console.log,
    // force: true,
  });
}

start()
  .then(() => {
    console.log('Sequelize connected');
  })
  .catch((e) => console.log(e));

app.use('/restaurants', restaurantRoutes);
// app.use('/api/menus', menuRoutes);
// app.use('/api/menuitems', menuitemRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
