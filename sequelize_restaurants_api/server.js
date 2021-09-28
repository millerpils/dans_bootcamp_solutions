const connection = require('./sequelize-connect');
const express = require('express');
const app = express();
const port = 8001;
const {
  restaurantModel,
  menuModel,
  menuItemModel,
} = require('./models/models');

const Restaurant = connection.define('Restaurant', restaurantModel);
const Menu = connection.define('Menu', menuModel);
const MenuItem = connection.define('MenuItem', menuItemModel);

// one-to-one relationship
Menu.belongsTo(Restaurant);

// one-to-one relationship
MenuItem.belongsTo(Menu);

// one-to-many relationship
Restaurant.hasMany(Menu);

// one-to-many relationship
Menu.hasMany(MenuItem);

// support req.body parsing
app.use(express.json());

async function start() {
  await connection.sync({
    logging: console.log,
    force: true,
  });
}

start()
  .then(() => {
    console.log('Sequelize connected');
  })
  .catch((e) => console.log(e));

/*
  RESTAURANTS
*/

// CREATE
app.post('/api/restaurant', async (req, res) => {
  try {
    const restaurant = await Restaurant.create({
      name: req.body.name,
      imagelink: req.body.imagelink,
    });
    res.send(restaurant);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// READ
app.get('/users', (req, res) => {
  User.findAll({
    include: [Post, Comment],
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

// READ
app.get('/users/:id', (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    include: [Post],
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

// UPDATE
app.put('/users/:id', (req, res) => {
  User.update(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

// UPDATE
app.patch('/users/:id', (req, res) => {
  user = {};

  Object.keys(req.body).forEach((key) => {
    user[key] = req.body[key];
  });

  User.update(user, {
    where: {
      id: req.params.id,
    },
  })
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

// DELETE
app.delete('/users/:id', (req, res) => {
  User.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      res.send('User deleted.');
    })
    .catch((err) => {
      res.send(404).send(err.message);
    });
});

/*
  POSTS
*/

// CREATE
app.post('/posts', (req, res) => {
  Post.create({
    UserId: req.body.userid,
    title: req.body.title,
    content: req.body.content,
  })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

// READ
app.get('/posts', (req, res) => {
  Post.findAll({
    include: [Comment],
  })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

/*
  COMMENTS
*/

// CREATE
app.post('/comments', (req, res) => {
  Comment.create({
    PostId: req.body.postid,
    UserId: req.body.userid,
    comment: req.body.comment,
  })
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

// READ
app.get('/comments', (req, res) => {
  Comment.findAll({
    include: [Post],
  })
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

// READ
app.get('/comments/:id', (req, res) => {
  Comment.findOne({
    where: { id: req.params.id },
    include: [User],
  })
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
