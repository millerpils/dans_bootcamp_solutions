// CREATE
db.restaurants.insertMany([
  {
    name: "Dan's resto",
    menus: [
      { title: 'fish menu', items: [{ name: 'haddock', price: 9.99 }] },
      {
        title: 'pizza menu',
        items: [
          { name: 'margherita', price: 9.99 },
          { name: 'hot and spicy', price: 9.99 },
        ],
      },
    ],
  },
  {
    name: 'Test resto',
    menus: [
      { title: 'supper menu', items: [{ name: 'haddock', price: 9.99 }] },
      {
        title: 'soup menu',
        items: [
          { name: 'pea soup', price: 9.99 },
          { name: 'ham soup', price: 9.99 },
        ],
      },
    ],
  },
]);

// CREATE
db.restaurants.insert({
  name: 'New Test resto',
  menus: [
    { title: 'happy menu', items: [{ name: 'haddock', price: 9.99 }] },
    {
      title: 'average menu',
      items: [
        { name: 'pea soup', price: 9.99 },
        { name: 'ham soup', price: 9.99 },
      ],
    },
  ],
});

// READ - find one resto with the id and nested menus title, only show menus as result
db.restaurants.findOne(
  {
    _id: ObjectId('618aafb28204f3bcb45ded8f'),
    'menus.title': 'fish menu',
  },
  {
    menus: 1,
  }
);

// READ - find all restos with a name like /test/, case insensitive
db.restaurants.find({ name: { $regex: /test/, $options: 'i' } });

// READ - get me all restaurants with the following menu titles
db.restaurants.find({
  menus: {
    // elemMatch looks into embedded arrays for matches
    $elemMatch: {
      title: 'fish menu',
      title: 'pizza menu',
    },
  },
});

// UPDATE - update a specific resto by ID. Set the first menus array item title to "sad menu"
db.restaurants.update(
  {
    _id: ObjectId('618a84948204f3bcb45ded8b'),
  },
  { $set: { 'menus.0.title': 'sad menu' } }
);

// UPDATE - update all menus belonging to a resto (sort of like a PUT)
db.restaurants.update(
  {
    _id: ObjectId('618a84538204f3bcb45ded89'),
  },
  {
    $set: {
      menus: [
        {
          title: 'NEW supper menu',
          items: [
            {
              name: 'haddock',
              price: 9.99,
            },
          ],
        },
        {
          title: 'soup menu',
          items: [
            {
              name: 'pea soup',
              price: 9.99,
            },
            {
              name: 'ham soup',
              price: 9.99,
            },
          ],
        },
      ],
    },
  }
);

/*
  MIMIC AN API
*/

var data = {
  name: "Dan's resto",
  menus: [
    { title: 'fish menu', items: [{ name: 'haddock', price: 9.99 }] },
    {
      title: 'pizza menu',
      items: [
        { name: 'margherita', price: 9.99 },
        { name: 'hot and spicy', price: 9.99 },
      ],
    },
  ],
};

// POST /restaurants
db.restaurants.insert({
  name: "Dan's resto",
});

// GET /restaurants - find all
db.restaurants.find({});

// GET /restaurant/:id - find one by ID

db.restaurants.findOne({
  _id: ObjectId('618aa7438204f3bcb45ded8c'),
});

// PUT /restaurant/:id - assumes we'd always send whole object to replace what's currently in the DB

db.restaurants.updateOne(
  {
    _id: ObjectId('618aa7438204f3bcb45ded8c'),
  },
  { name: "Dan's new resto" }
);

// DELETE /restaurant/:id

db.restaurants.remove({ _id: ObjectId('618aa7438204f3bcb45ded8c') });

// POST /restaurant/:id/menus - Push a new menu with menu items to the restaurant

db.restaurants.updateOne(
  {
    _id: ObjectId('618aaa0e8204f3bcb45ded8d'),
  },
  {
    $push: {
      menus: {
        title: 'tapas menu',
        items: [
          {
            name: 'tapas',
            price: 9.99,
          },
        ],
      },
    },
  }
);

//
//

/*
  PUT /restaurant/:id/menus?name=menu+name 
  Replaces specific menu with title and items

  Uses positional operator ($) to capture where
  in the menus array to update
*/

db.restaurants.updateOne(
  {
    _id: ObjectId('618aafb28204f3bcb45ded8f'),
    'menus.title': 'Fish Menu',
  },
  {
    $set: {
      'menus.$.title': 'Fish Menu',
      'menus.$.items': [
        {
          name: 'Haddock',
          price: 21.99,
        },
      ],
    },
  }
);
